import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=784d0604cf929d3fe341d567b6005d86`);
  }

  getWeather(city: string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=784d0604cf929d3fe341d567b6005d86`);
  }
}
