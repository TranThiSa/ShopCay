import { Component, OnInit } from '@angular/core';
import { faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  images = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'].map((n) => `./assets/img/${n}`);
  faList = faList;

  constructor() {

   }



}
