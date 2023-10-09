import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { FilterHeroesVillainsPipe } from './search/filter-heroes-villains.pipe';

import { AppComponent } from './app.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { VillainsComponent } from './Components/villains/villains.component';
import { GameComponent } from './Components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FilterHeroesVillainsPipe,
    VillainsComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
