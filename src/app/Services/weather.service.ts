import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  
  getWeather(location: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=aef67a1273785459520a022feafe6021&units=metric`
    return this.http.get(apiUrl);
  }
}
