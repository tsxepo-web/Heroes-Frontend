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
import { BannerComponent } from './Components/banner/banner.component';
import { BattleHistoryComponent } from './Components/battle-history/battle-history.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'battle-history',  component: BattleHistoryComponent},
  {path: '', redirectTo:'/banner', pathMatch: 'full'},
  { path: 'banner', component: BannerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FilterHeroesVillainsPipe,
    VillainsComponent,
    GameComponent,
    BannerComponent,
    BattleHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
