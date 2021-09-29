import { Component, OnInit } from '@angular/core';
import { DesignService } from './../../appServices/design.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private _designComp:DesignService) {
    this._designComp.userName.subscribe(uname=>{
      this.userName = uname
    })
   }

  ngOnInit(): void {
  }
  userName:any

  updateuser(uname:any){
    // this.userName = uname.value
    this._designComp.userName.next(uname.value)
  }
}
