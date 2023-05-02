import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  input = "";

  constructor(private router: Router) { }

  search(): void {
    if(this.input) {
      this.router.navigate(["products"], { queryParams: { productName: this.input }});
    } else {
      this.router.navigate([""])
    }
  }
}
