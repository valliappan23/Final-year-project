import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string;

  constructor( public userser:ApiService, public myRouter: Router) { }

  ngOnInit(): void {
  }

  DoLogin(form:NgForm){

    console.log(form.value);
    this.userser.DoUserLogin(form.value).subscribe((data:any[])=>{
      console.log(data);
      if(data.length==0){
        this.msg="Invalid Login";
      }
      else{
        localStorage.setItem("loggeduser",data[0]._id);
        let a=localStorage.getItem("loggeduser");
        // let a=1666580663725;

        console.log(a);
        localStorage.setItem("loggeduser Designation",data[0].cdesignation);
        let b=localStorage.getItem("loggeduser Designation");
        console.log(b);
        localStorage.setItem("loggeduser ID",data[0].uid);
        let c=localStorage.getItem("loggeduser ID");
        console.log(c);

        localStorage.setItem("loggeduser shop name",data[0].cname);
        let d=localStorage.getItem("loggeduser shop name");
        console.log(d);

        this.myRouter.navigateByUrl(`/dashboard/${a}`);
      }
    },(error:any)=>{
      console.log("User Not Found");
      console.log(error);
      this.msg="something went wrong"
    });

  }

}
