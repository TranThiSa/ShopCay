import { Component, OnInit } from '@angular/core';
import { faMapLocation, faMobilePhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content-contact',
  templateUrl: './content-contact.component.html',
  styleUrls: ['./content-contact.component.css']
})
export class ContentContactComponent implements OnInit {

  constructor() { }

  faLocation = faMapLocation;
  faPhone = faMobilePhone;
  faMail = faEnvelope;

  ngOnInit() {
  }

}
