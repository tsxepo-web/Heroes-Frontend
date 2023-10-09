import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HeroesService } from 'src/app/Services/heroes.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {
  @Output() villainSelected: EventEmitter<any> = new EventEmitter<any>();
  villains: any[] = [];
  itemsPerSlide = 5;
  singleSlideOffset = false;
  selectedVillain: any;
  noWrap = false;


  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((result) => {
      this.villains = result.filter((villain:any) => 
        villain.biography.alignment === 'bad');
    });
  }

  selectVillain(villain: any) {
    this.villainSelected.emit(villain);
  }

  resetGame() {
    this.selectedVillain = null;
  }
}
