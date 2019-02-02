import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { OlympicsComponent } from './olympics.component';
import { GamesComponent } from './games/games.component'
import { Db } from './services/db.service';
import { GameDetaisComponent } from './games/game-detais/game-detais.component';
import { GuardsComponent } from './games/guards/guards.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:GamesComponent,children: [
       
        { path: ':id', component: GameDetaisComponent,canActivate:[GuardsComponent]}
        
    ]
  }
    ]),
  ],
  declarations: [OlympicsComponent, GamesComponent, GameDetaisComponent, GuardsComponent],
  providers:[Db,GuardsComponent]
})
export class OlympicsModule { }
