import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any;
  constructor(
    private data: DataService,
    private router : Router,
    public spinner: NgxSpinnerService
    ) {
     data.fakeStore().subscribe((res) => {
      this.products = res
      console.log(res)
      spinner.hide()
    })

   }

   goto:any
   gotoProduct(id:any)
   {
    this.spinner.show();
    this.goto = "product/" + id;
    this.router.navigateByUrl(this.goto);
   }

  ngOnInit(): void {
    this.spinner.show()
  }




}
