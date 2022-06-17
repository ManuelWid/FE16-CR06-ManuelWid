import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  items: any = [];
  priceProd: number = 0;
  priceServ: number = 0;
  priceTotal: number = 0;
  priceDisc: number = 0;
  
  constructor(private oS: OrderService) { }

  ngOnInit(): void {
    this.items = this.oS.getItems();
    this.priceProd = this.oS.getTotal();
    this.priceServ = this.priceProd / 10;
    this.priceTotal = Number(this.priceProd) + Number(this.priceServ);
    if(Number(this.priceTotal) >= 40){
      this.priceDisc = this.priceTotal * 0.15;
      this.priceTotal = this.priceTotal * 0.85;
    }
    // console.log(this.items);
  }

}
