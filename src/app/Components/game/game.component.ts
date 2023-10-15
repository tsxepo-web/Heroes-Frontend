import { Component } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  location: string = '';
  weatherApi: any;
  heroScore: number = 0;
  villainScore: number = 0;
  battleEnded: boolean = false
  heroSelected: boolean = false; 
  villainSelected: boolean = false; 
  selectedHero: any;
  selectedVillain: any;
  
  constructor(private weatherService: WeatherService, private backendservice:BackendService) {}

  selectHero(hero: any) {
    this.selectedHero = hero;
    this.heroSelected = true;
  }
  selectVillain(villain: any) {
    this.selectedVillain = villain;
    this.villainSelected = true;
  }

  battle() {
    this.weatherService.getWeather(this.location).subscribe((result) => {
      this.weatherApi = result;
      const temperature =  this.weatherApi.main.temp;

      if (this.selectedHero.biography.placeOfBirth === this.location){
        this.heroScore += 10;
      }
      if (this.selectedVillain.biography.placeOfBirth === this.location){
        this.villainScore += 10;
      }
      if (this.selectedHero.powerstats.intelligence > this.selectedVillain.powerstats.intelligence){
        this.heroScore += 15;
      }
      if (this.selectedVillain.powerstats.intelligence > this.selectedHero.powerstats.intelligence){
        this.villainScore += 15;
      }
      if (this.selectedHero.powerstats.strength > this.selectedVillain.powerstats.strength){
        this.heroScore += 10;
      }
      if (this.selectedVillain.powerstats.strength > this.selectedHero.powerstats.strength){
        this.villainScore += 10;
      }
      if ((this.selectedHero.powerstats.speed > this.selectedVillain.powerstats.speed) && temperature > 20){
        this.heroScore -= 5;
      }
      if ((this.selectedVillain.powerstats.speed > this.selectedHero.powerstats.speed) && temperature > 20){
        this.villainScore -= 5;
      }
      if ((this.selectedHero.powerstats.durability > this.selectedVillain.powerstats.durability) && temperature > 20){
        this.heroScore += 5;
      }
      if ((this.selectedVillain.powerstats.durability > this.selectedHero.powerstats.durability) && temperature < 10){
        this.villainScore += 5;
      }
      if ((this.selectedHero.powerstats.power > this.selectedVillain.powerstats.power)){
        this.heroScore += 10;
      }
      if ((this.selectedVillain.powerstats.power > this.selectedHero.powerstats.power)){
        this.villainScore += 10;
      }
      if ((this.selectedHero.powerstats.combat > this.selectedVillain.powerstats.combat) && temperature > 20){
        this.heroScore += 7;
      }
      if ((this.selectedVillain.powerstats.combat > this.selectedHero.powerstats.combat) && temperature > 20){
        this.villainScore += 7;
      }
      this.battleEnded = true;
      this.saveBattleDetails();
    });
  }

  refreshGame() {
    window.location.reload();
  }
  saveBattleDetails() {
    const battleDetails = {
      heroName: this.selectedHero.name,
      villainName: this.selectedVillain.name,
      location: this.location,
      battleTime: new Date(),
      heroScore: this.heroScore,
      villainScore: this.villainScore,
    };
    this.backendservice.createBattle(battleDetails).subscribe((response) => {
      console.log('Created a new battle:', response);
    })
  }
}
