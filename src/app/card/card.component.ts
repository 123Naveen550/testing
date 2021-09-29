import { DesignService } from './../appServices/design.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private _msgServices:DesignService) { }
  product=[];

  ngOnInit(): void {
    this._msgServices.product().subscribe(productData=>console.log(this.product=productData)) 
  }

}
