import { Component, OnInit } from '@angular/core';
import { faTreeCity} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/common/Product';
import { ProductService } from 'src/app/services/ProductService';
@Component({
  selector: 'app-second_content',
  templateUrl: './second_content.component.html',
  styleUrls: ['./second_content.component.css']
})
export class Second_contentComponent implements OnInit {

  
  faTree = faTreeCity;
  products!:Product[];
  productService;

  constructor() {
    this.productService = new ProductService();
   }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
