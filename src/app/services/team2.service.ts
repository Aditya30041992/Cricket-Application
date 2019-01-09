import { Injectable } from '@angular/core';
import { Team2 } from '../models/Team2';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class Team2Service {
//   team2palyers:Array<string> =[];
//   addplayers2(teamplayer2:Array<string>)
// {
//   this.team2palyers=teamplayer2;
  
// }
team2palyers:Array<Team2> =[];


addTeam2( name2: string, professional2:string)
{
  this.team2palyers.push(new Team2 (name2,professional2));
  console.log(this.team2palyers[0]);
}

addplayers2(teamplayer2:Array<Team2>)
{
this.team2palyers=teamplayer2;
console.log(this.team2palyers[0]);
}
  constructor() { }
}
// 