import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Component({
  templateUrl: './loginrestaurent.component.html',
  styleUrls: ['./loginrestaurent.component.css']
})
export class LoginrestaurentComponent implements OnInit {

  constructor(private http:HttpClient) { }
  login(data){
    this.http.post("http://localhost:6363/restlogin",{
      email:data.email,
      password:data.password
    }).subscribe((res:any)=>{
      console.log(res.msg)
    })
  }
  ngOnInit() {
  }

}
