import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {QuestionsComponent} from './questions/questions.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {StartgameComponent} from './startgame.component';
import {ChoixComponent} from './choix/choix.component';
import {ParametresComponent} from './parametre/parametres.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'question/:id', component: QuestionsComponent},
  {path: 'startGame', component: StartgameComponent},
  {path: 'jeu', component: ChoixComponent},
  {path: 'parametres', component: ParametresComponent},

  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
