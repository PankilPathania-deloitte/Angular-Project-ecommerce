import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  arrow = false; // for onMenuOpen 
  val: string = "keyboard_arrow_down"; // value of the function to be used for onMenuOpen

  user : any; // storing the user details 
  u_id=localStorage.getItem("id")

  constructor( private route: Router,private api:ApiService) { 
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

    this.api.getUserById(this.u_id).subscribe(
      data=>{
        this.user=data
      }
    )
  }

  logout() {
    this.api.logout()
  }

}
