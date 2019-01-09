import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { CommentryService } from 'src/app/services/commentry.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  t1;
  t2;
  ballnum=1;
  numofovers=0;
  index=0;
  @ViewChild('possiblerun') possiblerunInTS: ElementRef;
  
  @ViewChild('wickettype') wickettypeInTS: ElementRef;
  
  
  @ViewChild('ball') ballInTS: ElementRef;
  
  @ViewChild('over') overInTS: ElementRef;
  
  @ViewChild('commentry') commentryInTS: ElementRef;
  


  public showType:boolean = false;

  public showNewBowler:boolean=false;

   public showCatchBy:boolean=false;
   
   private txtBall:boolean=true;
   private txtOver:boolean=true;
  constructor( private comm:CommentryService) { }

  ngOnInit() {
  }

  onSelectOfPossibility()
  {
    this.t1=((<HTMLInputElement>this.possiblerunInTS.nativeElement).value);
    if (this.t1=='Wicket') {
      
      // console.log("In Possibility");
      this.showType = !this.showType;

    }
    else
    {
      this.showType=false;
    }
    
  }

  onSelectOfWicket()
  {
    this.t2=((<HTMLInputElement>this.wickettypeInTS.nativeElement).value);
    if(this.t2=='Catch')
    {
     this.showCatchBy=!this.showCatchBy;
    }
    else
    {
      this.showCatchBy=false;
    }
  }

  onAddScoreClick()
  {
    this.ballnum++;
    if(this.ballnum>6)
    {
      this.ballnum=1;
      this.numofovers++;
      this.showNewBowler=true;
    }
    else
    {
      this.showNewBowler=false;
    }
    this.showType=false;
    this.showCatchBy=false;
    this.comm.addCommentry( (<HTMLInputElement>this.ballInTS.nativeElement).value,
    (<HTMLInputElement>this.overInTS.nativeElement).value,
    (<HTMLInputElement>this.commentryInTS.nativeElement).value);
    
    
  }
}
