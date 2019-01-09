import { Injectable } from '@angular/core';

import {Commentry } from 'src/app/models/Commentry';
@Injectable({
  providedIn: 'root'
})
export class CommentryService {

  coMMentry:Array<Commentry> =[];
  constructor() { }



  addCommentry(ball:any,over:any,description:string)
  {
    this.coMMentry.push(new Commentry(ball,over,description));
    console.log(this.coMMentry[0]);
  }
}
