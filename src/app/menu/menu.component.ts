import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { OrderService } from '../order.service';
// import { IResponse } from '../IResponse'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  data: any = {};
  constructor(private api: ApiService, private oS: OrderService){
    this.api.getData().subscribe(data => {
      this.data = data;
      // console.log(this.data);
    })
  }

  ngOnInit(): void {
  }

  addOrder(item: any){
    window.alert('Dish added to your order.');
    this.oS.addToCart(this.data.data[item]);
  }

}