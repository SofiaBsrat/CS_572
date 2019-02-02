import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'olympics/game', loadChildren:'./olympics/olympics.module#OlympicsModule'},
 // {path:'olympics/game/id', loadChildren:'./olympics/olympics.module#OlympicsModule'},
  
//   {
//     path: '', component: GamesComponent, children: [
//         { path: '/:id', component: GameDetaisComponent }
//     ]
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
