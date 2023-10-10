import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  heroSelected: boolean = false; 
  villainSelected: boolean = false; 
  selectedHero: any;
  selectedVillain: any;
  location: string = '';
  weatherApi: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
  }
  selectHero(hero: any) {
    this.selectedHero = hero;
    this.heroSelected = true;
  }

  selectVillain(villain: any) {
    this.selectedVillain = villain;
    this.villainSelected = true;
  }

  verifyHero() {
    if (this.selectedHero) {
      this.heroSelected = true;
    }
  }

  verifyVillain() {
    if (this.selectedVillain) {
      this.villainSelected = true;
    }
  }
  battle() {
    this.weatherService.getWeather(this.location).subscribe((result) => {
      this.weatherApi = result;
      const temperature =  this.weatherApi.main.temp;
      console.log(this.weatherApi);
    });
  }
}
