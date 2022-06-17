import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  items: any = [];
  total: number = 0;

  addToCart(product: any) {
    this.items.push(product);
    this.total += Number(product.price);
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.total;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
