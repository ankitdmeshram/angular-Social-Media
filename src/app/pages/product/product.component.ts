import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  quan: number= 1

  product:any
  id: number
  constructor(private data: DataService, 
    private route: ActivatedRoute,
    private router: Router,
    public spinner: NgxSpinnerService,
    public cart: CartService

    ) {

    this.id = Number(this.route.snapshot.paramMap.get('id'));   
    
    data.fakeStore(this.id).subscribe((res) => {
      this.product = res
      console.log(this.product)
      this.spinner.hide()
      
    })
   }


  ngOnInit(): void {
    this.spinner.show();

  }

  addCart(id:number, title:string, image: string, price: number, quantity: number = 1){
    this.spinner.show();
    this.cart.addCart(id, title, image, price, quantity)
  }


}
