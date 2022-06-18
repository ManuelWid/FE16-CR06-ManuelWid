import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  orderForm = this.fB.group({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });
  
  constructor(private oS: OrderService, private fB: FormBuilder) { }

  ngOnInit(): void {
    this.items = this.oS.getItems();
    this.priceProd = this.oS.getTotal();
    this.priceServ = this.priceProd / 10;
    this.priceTotal = this.priceProd + this.priceServ;
    if(this.priceTotal >= 40){
      this.priceDisc = this.priceTotal * 0.15;
      this.priceTotal = this.priceTotal * 0.85;
    }
    // console.log(this.items);
  }

  onSubmit(){
    window.alert("Order placed");
    this.items = this.oS.clearCart();
    this.orderForm.reset();
    this.clearPrice();
  }

  clearOrder(){
    window.alert("Order cancled");
    this.items = this.oS.clearCart();
    this.clearPrice();
  }

  clearPrice(){
    this.priceProd = 0;
    this.priceServ = 0;
    this.priceTotal = 0;
    this.priceDisc = 0;
  }

}
