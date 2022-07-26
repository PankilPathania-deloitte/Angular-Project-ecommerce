import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide = true; // for hiding the password field

  role: any = [
    { value: 'None', viewValue: 'None' },
    { value: 'client', viewValue: 'Buyer' },
    { value: 'seller', viewValue: 'Seller' },
  ];
  roleControl = new FormControl(this.role[0].value, [Validators.required]);
  signform: FormGroup;
  constructor(private api:ApiService) {
    this.signform = new FormGroup({
      fname: new FormControl('', [Validators.required]), // for first name
      lname: new FormControl('', [Validators.required]), // for last name
      email: new FormControl('', [Validators.required, Validators.email]), // for eamil with proper validation
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]), // phone number
      role: this.roleControl,
      password: new FormControl('', [Validators.required]), // password entered
    })
  }



  ngOnInit(): void {
    console.log("hello")
  }

  signUser() { // this function signs the user in by first creating the necessary values to be passed for post request

    let post = this.signform.value; // stores the value of the form 
    let fullname = post.fname + " " + post.lname; // for concatinating the first and last name
    let final = {  // this is the final format that will be passes to post request 
      name: fullname,
      password: post.password,
      id: post.email,
      role: post.role,
      wishlist:[],
      cart:[],
      phone:post.phone
    }
    console.log(final);
    this.api.addPerson(final)

  }



}
