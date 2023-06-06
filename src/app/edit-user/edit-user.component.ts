import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  msg:string;
  msg1:string;
  userIdAvailable=false;
  userData={_id:Number,uname:String,cname:String,uaddr:String,uid:String,udob:String,udoj:String,uemail:String,uphone:String,cdesignation:String,cgender:String,upassword:String,usalary:String,uattain:String};
  constructor(public userser:ApiService, public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe((param:Params)=>{
      console.log(param['USERID']);
      if(param['USERID']){
        this.userser.getSingleUserData(param['USERID']).subscribe((data:any[])=>{
          console.log(data);
          this.userData=data[0];
        },(error)=>{
          console.log(error);
        })
      }
    });
  }

  // DoRegister(form:NgForm){
  //   console.log("User Registered successfully !!!!!!!!!!!!");
  //   console.log(form.value);
  //   this.userser.DoUserRegistraton(form.value).subscribe((data:string)=>{
  //     console.log(data);
  //     this.msg=data;
  //     form.reset()
  //   },(error:any)=>{
  //     console.log(error);
  //     this.msg="something went wrong";

  //   });
    
  // }

  DoEditUser(form:NgForm){

    form.value._id=this.userData._id;

    console.log(form.value);

    this.userser.editSingleUserData(form.value).subscribe((data:string)=>{
      this.msg=data;
    },(error)=>{
      console.log(error);
      this.msg="Something went wrong";
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
