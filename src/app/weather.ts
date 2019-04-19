export interface IWeatherData {
  city: string;
  time: Date;
  temp: number;
  mintemp: number;
  maxtemp: number;
  humidity: number;
  wind: number;
  description: string;
  icon: string;
}

export class WeatherData implements IWeatherData {
  city: string;
  time: Date;
  temp: number;
  mintemp: number;
  maxtemp: number;
  humidity: number;
  wind: number;
  description: string;
  icon: string;

  constructor(
    city: string,
    time: Date,
    temp: number,
    mintemp: number,
    maxtemp: number,
    humidity: number,
    wind: number,
    description: string,
    icon: string
  ) {
    this.city = city;
    this.time = time;
    this.temp = temp;
    this.mintemp = mintemp;
    this.maxtemp = maxtemp;
    this.humidity = humidity;
    this.wind = wind;
    this.description = description;
    this.icon = icon;
  }
}
