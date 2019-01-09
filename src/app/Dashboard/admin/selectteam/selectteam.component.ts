import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Team1 } from 'src/app/models/Team1';
import { Team2 } from 'src/app/models/Team2';
import { Team1Service } from 'src/app/services/team1.service';
import { Team2Service } from 'src/app/services/team2.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-selectteam',
  templateUrl: './selectteam.component.html',
  styleUrls: ['./selectteam.component.css']
})
export class SelectteamComponent implements OnInit {
  //lists1;

  
  lists2;
  lists1;
  pname;
  ind=1;
  ind2=1;
  playername:Array<Team1> =[];
  playername2:Array<Team2>=[];
  // contacts: Array<Team1>;
  //name1:string = "";
  //name2:string = "";
  //team1Service:Team1Service;
  //team2Service:Team2Service;

  @ViewChild('name1') name1InTS: ElementRef;
  @ViewChild('name2') name2InTS: ElementRef;
  @ViewChild('professional1') professional1InTs: ElementRef;
  @ViewChild('professional2') profession2InTS: ElementRef;
 
  constructor(private teamplayer1:Team1Service,
   private  teamplayer2:Team2Service, 
   public matchserv:MatchService, private router: Router,
    private route: ActivatedRoute,
    ) {
     }

  ngOnInit() {
  }


  onAddPlayer1Click(){
    this.ind++;
    if(this.ind<=12)
    {
      this.teamplayer1.addTeam1((<HTMLInputElement>this.name1InTS.nativeElement).value,
      (<HTMLInputElement>this.professional1InTs.nativeElement).value); 
    this.name1InTS.nativeElement.value="";
    this.professional1InTs.nativeElement.value="";
    }
       
  }
  onAddPlayer2Click(){
    this.ind2++;
    if(this.ind2<=12)
    {
      this.teamplayer2.addTeam2((<HTMLInputElement>this.name2InTS.nativeElement).value,
      (<HTMLInputElement>this.profession2InTS.nativeElement).value);
      this.name2InTS.nativeElement.value="";
    this.profession2InTS.nativeElement.value="";
    }
  }

  onFirstFinalTeam()
  {
    this.teamplayer1.addplayers1(this.playername);
  }
  onSecondtFinalTeam()
  {
    this.teamplayer2.addplayers2(this.playername2);

  }
  onReadyToPlayClick1(){
    this.router.navigate(['/summary'],{relativeTo:this.route});
  }
  onReadyToPlayClick()
  {
    this.router.navigate(['/summary'],{relativeTo:this.route}); 
  }
  
}
