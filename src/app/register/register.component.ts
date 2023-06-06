import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg:string;
  msg1:string;
  userIdAvailable=false;
  constructor(public userser:ApiService) { }

  ngOnInit(): void {
  }

  DoRegister(form:NgForm){
    console.log("User Registered successfully !!!!!!!!!!!!");
    console.log(form.value);
    this.userser.DoUserRegistraton(form.value).subscribe((data:string)=>{
      console.log(data);
      this.msg=data;
      form.reset();
      window.location.reload();
    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong";

    });
    
  }

  checkID(userId : String){

    this.userser.UserIdAvailability(userId).subscribe((data:any[])=>{
      console.log(data);
      if(data.length==0){
        this.msg1="User Id is available";
        this.userIdAvailable=true;
      }
      else{
        this.msg1="User Id is Not Available"
        this.userIdAvailable=false;
      }
    },(error:any)=>{
      console.log(error);
      this.msg1="something went wrong";
    });

    

  }
}
