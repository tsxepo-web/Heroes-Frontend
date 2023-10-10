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
  selectedHero: any = null; 
  searchQuery: string = '';
  filteredHeroes: any[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((result) => {
      this.heroes = result.filter((hero:any) =>
        hero.biography.alignment === 'good');
    });
  }
  selectHero(hero: any) {
    this.heroSelected.emit(hero);
  }
  filterHeroes() {
      this.filteredHeroes = this.heroes.filter((hero) =>
      hero.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
  }
}
