import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  msg : string;
  msg1 : String;
  msg2 : String;
  storeIdAvailable=false;

  constructor(public userser:ApiService) { }

  ngOnInit(): void {
  }

  DoShopRegister(form:NgForm){
    console.log("Store Registered successfully !!!");
    console.log(form.value);
    this.userser.ShopRegisteration(form.value).subscribe((data:string)=>{
      console.log(data);
      this.msg=data;
      form.reset();
      window.location.reload();
    },(error:any)=>{
        console.log(error);
        this.msg="something went wrong";
    })
  }

  checkID(shopId : String){

    this.userser.ShopIdAvailability(shopId).subscribe((data:any[])=>{
      console.log(data);
      if(data.length==0){
        this.msg1="User Id is available";
        this.storeIdAvailable=true;
      }
      else{
        this.msg1="User Id is Not Available";
        this.storeIdAvailable=false;
      }
    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong";
    });

  }

}
