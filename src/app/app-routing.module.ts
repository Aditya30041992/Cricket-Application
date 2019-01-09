import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Dashboard/home/home.component';
import { ScorecardComponent } from './Dashboard/scorecard/scorecard.component';
import { CommentryComponent } from './Dashboard/commentry/commentry.component';
import { AdminComponent } from './Dashboard/admin/admin.component';
import { NewmatchComponent } from './Dashboard/admin/newmatch/newmatch.component';
import { SelectteamComponent } from './Dashboard/admin/selectteam/selectteam.component';
import { SummaryComponent } from './Dashboard/summary/summary.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',component: HomeComponent},
  { path: 'scorecard',component: ScorecardComponent}, 
  { path: 'commentry', component: CommentryComponent},
  { path: 'summary', component: SummaryComponent},
  {  path: 'admin',component: AdminComponent,
    children: [
      { path: 'newmatch', component: NewmatchComponent },
      { path: 'selectteam', component: SelectteamComponent }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
