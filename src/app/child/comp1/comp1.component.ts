import { DesignService } from './../../appServices/design.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

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
