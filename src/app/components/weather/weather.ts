import { Component, NgZone } from '@angular/core';
import { WeatherService } from '../../service/api/weather/weather-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  city: string = '';
  weatherData: any;
  errorMessage: string | null = null;
  search: boolean = false;

  constructor(private weatherService: WeatherService, private ngZone: NgZone) {}

  getWeather() {
    if (!this.city.trim()) return;

    this.search = true;

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.ngZone.run(() => {
          this.weatherData = data;
          this.errorMessage = null;
          this.search = false;
        });
      },
      error: () => {
        this.ngZone.run(() => {
          this.weatherData = null;
          this.errorMessage = 'City not found!';
          this.search = false;
        });
      },
    });
  }
}
