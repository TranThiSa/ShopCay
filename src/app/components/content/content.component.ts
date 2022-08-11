import { Component, OnInit } from '@angular/core';
import { faShippingFast} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/common/Product';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  faShippingFast = faShippingFast;
  products?:Product[];
  productService;

  constructor() {
    this.productService = new ProductService();
   }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
