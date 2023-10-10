import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  heroSelected: boolean = false; 
  villainSelected: boolean = false; 
  selectedHero: any;
  selectedVillain: any;

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
}
