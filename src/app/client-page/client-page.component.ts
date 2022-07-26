import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {

  openSideNav = true;
  
 
  toggleSidenav() {
  this.openSideNav = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
