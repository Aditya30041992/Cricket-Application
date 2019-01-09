import { Injectable } from '@angular/core';
import { Match } from 'src/app/models/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  
  maTch:Array<Match> =[];
  constructor() { }



  addMatch(team1:string,team2:string,toss:string,decision:string,overs:number)
  {
    this.maTch.push(new Match(team1,team2,toss,decision,overs));
    console.log(this.maTch[0]);
  }
  //matchdetails:Array<string> =[];
  addteams1(mat:Array<Match>)
  {
    this.maTch=mat;
    console.log(this.maTch[0]);
  }
}
