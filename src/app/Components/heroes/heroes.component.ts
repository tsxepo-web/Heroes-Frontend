import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/Services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  villains: any[] = [];
  selectedHero: any = null;
  selectedVillain: any = null;
  searchQuery: string = '';

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((result) => {
      this.heroes = result.filter((hero:any) => hero.biography.alignment === 'good');
      this.villains = result.filter((villain:any) => villain.biography.alignment === 'bad');
    });
  }
  showHeroDetails(hero: any): void {
    this.selectedHero = hero;
    this.selectedHero = null;
  }
  showVillainDetails(villain: any): void {
    this.selectedVillain = villain;
    this.selectedVillain = null;
  }
}
