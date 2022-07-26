import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.scss']
})
export class SellerPageComponent implements OnInit {

  openSideNav = true;
  
 
  toggleSidenav() {
  this.openSideNav = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
