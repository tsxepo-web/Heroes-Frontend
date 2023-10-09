import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  heroSelected: boolean = false; 
  villainSelected: boolean = false; 
  selectedHero: any;
  selectedVillain: any;

  selectHero(hero: any) {
    this.selectedHero = hero;
    console.log('Selected Hero:', this.selectedHero);
  }

  selectVillain(villain: any) {
    this.selectedVillain = villain;
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
}
