import { Component } from "@angular/core";
import { DataService } from "./data.service";
import { IWeatherData, WeatherData } from "./weather";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  cityname: string;
  weatherdata: any;
  currentweatherdata: any;
  weatherarray: IWeatherData[] = [];
  weather: IWeatherData[] = [];

  constructor(private data: DataService) {}

  receiveCity($event) {
    this.weatherarray = [];
    this.cityname = $event;
    this.weather = [];
    if (
      this.cityname === null ||
      this.cityname === undefined ||
      this.cityname.trim() === ""
    ) {
      alert("No city Inputed");
    } else {
      this.data.getCurrentWeather(this.cityname).subscribe(
        data => {
          this.currentweatherdata = data;
          var fetched = this.currentweatherdata;
          var tempweather = new WeatherData(
            fetched.name,
            new Date(),
            fetched.main.temp,
            fetched.main.temp_min,
            fetched.main.temp_max,
            fetched.main.humidity,
            fetched.wind.speed,
            fetched.weather[0].description,
            fetched.weather[0].icon
          );
          this.weather.push(tempweather);
        },
        error => console.log(error)
      );
      this.data.getWeather(this.cityname).subscribe(
        data => {
          this.weatherdata = data;
          for (let i = 0; i < this.weatherdata.list.length; ) {
            var fetched = this.weatherdata.list[i];
            var weather = new WeatherData(
              this.weatherdata.city.name,
              fetched.dt_txt,
              fetched.main.temp,
              fetched.main.temp_min,
              fetched.main.temp_max,
              fetched.main.humidity,
              fetched.wind.speed,
              fetched.weather[0].description,
              fetched.weather[0].icon
            );
            this.weatherarray.push(weather);
            i += 8;
          }
        },
        error => console.log(error)
      );
    }
  }
}
