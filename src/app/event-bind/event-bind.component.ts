import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
msg:string="";
onadd(event:any){
  this.msg=event.target.value +"add in cart";
}
}
