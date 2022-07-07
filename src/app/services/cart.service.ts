import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(
    private router: Router
  ) { }

  cartItems: Cart[] = []

  addCart(ids: any, title: string, image: string, price: number, quantity:number = 1) {
    let alreadyInCart = false
    this.cartItems.find(item => {
      if (item.id === ids) {
        item.quantity++
        alreadyInCart = true
      }

    })
    if (!alreadyInCart) {
      this.cartItems.push({
        'id': ids,
        'title': title,
        'quantity': quantity,
        'image': image,
        'price': price
      })
    }

    console.log(this.cartItems)
    this.router.navigateByUrl("cart");


  }



}
