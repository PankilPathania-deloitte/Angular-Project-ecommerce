import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  arrow = false; // for onMenuOpen 
  val: string = "keyboard_arrow_down"; // value of the function to be used for onMenuOpen

  user : any; // storing the user details 

  constructor( private route: Router) { 
   } // calling the ApiService
   showSideNavIcon = true;
  changeIcon() { // controlling the functionality of the arrow button
 
    this.arrow = !this.arrow;
    if (this.arrow) {
      this.val = "keyboard_arrow_up;"
    }
    this.val = "keyboard_arrow_down";

  }

  ngOnInit(): void {
  }

  logout() {
    
  }

}
