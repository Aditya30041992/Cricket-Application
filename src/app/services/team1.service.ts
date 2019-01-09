import { Injectable } from '@angular/core';
import { Team1 } from '../models/Team1';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class Team1Service {
  team1palyers:Array<Team1> =[];


  addTeam1( name1: string, professional1:string)
  {
    this.team1palyers.push(new Team1(name1,professional1));
    
    console.log(this.team1palyers[0]);
  }

  addplayers1(teamplayer1:Array<Team1>)
{
  
  this.team1palyers=teamplayer1;
  console.log(this.team1palyers[0]);
}
  constructor() { }
}
// new Team1 (' ')