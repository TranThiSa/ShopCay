import { Component, OnInit } from '@angular/core';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  faFilter = faFilter;
  faSearch = faSearch;

  ngOnInit() {
  }

}
