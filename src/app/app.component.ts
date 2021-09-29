import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2';

  users={
    name:"Naveen",
    age:25,
    address:'agra'
  }
}
