import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-pipe',
  templateUrl: './about-pipe.component.html',
  styleUrls: ['./about-pipe.component.css']
})
export class AboutPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 value="this is pipe"

 name="HOW ARE U"

 date= new Date()
}
