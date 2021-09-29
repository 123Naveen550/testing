import { Component, OnInit } from '@angular/core';
import { DesignService } from './../appServices/design.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _designComp:DesignService) {
    this._designComp.userName.subscribe(uname=>{
      this.userName = uname
    })
   }

  ngOnInit(): void {
  }

  statusOnline:boolean=false;
  products=[
    {name:'laptop'},
    {name:'Tv'},
    {name:'Mobile'},
    {name:'Machine'}
  ]

  userName:any

}
