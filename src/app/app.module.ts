import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { ScorecardComponent } from './Dashboard/scorecard/scorecard.component';
import { CommentryComponent } from './Dashboard/commentry/commentry.component';
import { AdminComponent } from './Dashboard/admin/admin.component';
import { HeaderComponent } from './common/header/header.component';
import { NewmatchComponent } from './Dashboard/admin/newmatch/newmatch.component';
import { SelectteamComponent } from './Dashboard/admin/selectteam/selectteam.component';
import { SummaryComponent } from './Dashboard/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScorecardComponent,
    CommentryComponent,
    AdminComponent,
    HeaderComponent,
    NewmatchComponent,
    SelectteamComponent,
    SummaryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
