import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  myReactiveForm!:FormGroup

  error:any

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'course': new FormControl('Angular'),

    })
  }
  onSubmit(){
    console.log(this.myReactiveForm)
  }


  
  dispaly=true
  Hide(){
    this.dispaly=!this.dispaly;

  }

}
