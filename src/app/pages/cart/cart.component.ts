import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myCart : any

  constructor(
    public cart: CartService,
    private data: DataService,    
    public spinner: NgxSpinnerService,
    ) { 
    this.myCart = this.cart.cartItems
    setTimeout(() => {
      this.spinner.hide()
    }, 500);
  }
  
  ngOnInit(): void {
      this.spinner.show()
      setTimeout(() => {
        this.spinner.hide()
      }, 500);
    }

}
