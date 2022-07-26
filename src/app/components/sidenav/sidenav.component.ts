import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Values } from 'src/app/value';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isValue=Values.isValue;
  title = 'navbar works';
  
  sidenavWidth = 5;
  @Input() toggle=true;
  onClick(routeTo:any,num:any){

    this.isValue=num;
    Values.isValue=num;
    this.router.navigate(['/home/'+routeTo]);

  }
 


  constructor(private router: Router) {}
  

  ngOnInit(): void {
    // this.dashboard_btn.focus();
    // this.router.navigate(['/home/dashboard']);
  }

  async increase() {
    this.sidenavWidth = 20;
  }
  decrease() {
    this.sidenavWidth = 5;
  }

}
