import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { ApiService } from '../api.service'
import { OrderService } from '../order.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number = 0;
  data: any = {};

  constructor(private api: ApiService, private route: ActivatedRoute, private oS: OrderService){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // console.log(this.id);
    });

    this.api.getItem(this.id).subscribe(data => {
      this.data = data;
      // console.log(typeof data);
      // console.log(typeof this.data);
    })
  }

  addOrder() {
    window.alert('Dish added to your order.');
    this.oS.addToCart(this.data);
  }
}