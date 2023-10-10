import { Component, EventEmitter, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { HeroesService } from 'src/app/Services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Output() heroSelected: EventEmitter<any> = new EventEmitter<any>();
  heroes: any[] = [];
  itemsPerSlide = 5;
  singleSlideOffset = false;
  selectedHero: any = null; 
  prevSelectedHero: any = null;
  noWrap = false;


  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((result) => {
      this.heroes = result.filter((hero:any) =>
        hero.biography.alignment === 'good');
    });
  }
  selectHero(hero: any) {
    this.prevSelectedHero = this.selectedHero;
    this.heroSelected.emit(hero);
  }

  resetGame() {
    this.selectedHero = null;
  }
}
