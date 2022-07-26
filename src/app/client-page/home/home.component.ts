import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  openSideNav = true;
  
 
  toggleSidenav() {
  this.openSideNav = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
