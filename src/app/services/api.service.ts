import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url="http://localhost:3000/users/"

  constructor(private http:HttpClient,private route:Router) { }

  login(form:any){
    this.http.get<any>(this.url+form.value.email).subscribe(
      (data:any)=>{
        if (data==null){
          console.log("Failed")
        }
        else{
          console.log(data)
          if(form.value.password==data.password){
            if(data.role=="client"){
              localStorage.setItem("id",data.id)
              localStorage.setItem("role",data.role)
              this.route.navigate(['client-page/home'])
            }
            if(data.role=="seller"){
              localStorage.setItem("id",data.id)
              localStorage.setItem("role",data.role)
              this.route.navigate(["seller-page/home"])
            }
          }
          else{
            console.log("Incorrect")
          }
        }
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }


  logout(){
    localStorage.removeItem("id")
    localStorage.removeItem("role")
    this.route.navigate(['/login'])
  }


  addPerson(person:Person) {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    this.http.post(this.url, body,{'headers':headers}).subscribe(
      (data:any)=>{
        this.route.navigate(['/login'])
      },(error:any)=>{
        console.log(error)
      }
      );
  }


  gettoken(){
    return !!localStorage.getItem('id')
    }

    getUserById(id:any){
      return this.http.get<Person>(this.url+id)
    }


    getRole(){
      let x=localStorage.getItem('role')
      return x
    }
}
