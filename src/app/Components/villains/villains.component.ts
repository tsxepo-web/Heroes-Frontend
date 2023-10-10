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
  searchQuery: string = '';
  filteredVillains: any[] = [];

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
  filterVillains() {
      this.filteredVillains = this.villains.filter((villain) =>
      villain.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
  }
}
