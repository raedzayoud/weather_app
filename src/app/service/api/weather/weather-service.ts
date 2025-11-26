import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'fe824cb856a37281c8c13e7a5fbbd488';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const q = encodeURIComponent(city);
    return this.http.get(`${this.apiUrl}?q=${q}&appid=${this.apiKey}&units=metric`);
  }
}
