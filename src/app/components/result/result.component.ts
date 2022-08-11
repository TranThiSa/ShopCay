import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/Product';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  products!:Product[];
  productService;

  constructor() {
    this.productService = new ProductService();
   }

  ngOnInit() {
    this.products = this.productService.getProducts();  
  }

}
