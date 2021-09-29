import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-comp',
  templateUrl: './user-comp.component.html',
  styleUrls: ['./user-comp.component.css']
})
export class UserCompComponent implements OnInit {
  
  @Input() hero:any;

  getInputInfo(inputInfo:any){
    console.log(inputInfo)



  }

  constructor() { }

  ngOnInit(): void {

    
  }

  

}
