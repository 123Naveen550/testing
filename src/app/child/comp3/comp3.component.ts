import { Component, OnInit } from '@angular/core';
import { DesignService } from './../../appServices/design.service';


@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
