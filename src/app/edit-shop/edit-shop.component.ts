import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css']
})
export class EditShopComponent implements OnInit {

  msg : string;
  msg1 : String
  storeIdAvailable=false;
  shopData={_id:Number,sname:String,sid:String,saddr:String,sphone:String,stype:String,sownership:String,semail:String,span:String};

  constructor(public userser:ApiService, public activeRoute: ActivatedRoute, public myrout : Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param:Params)=>{
      console.log(param['shopid']);
      if(param['shopid']){
        this.userser.getSingleShopData(param['shopid']).subscribe((data:any[])=>{
          console.log(data);
          this.shopData=data[0];
        },(error)=>{
          console.log(error);
        })
      }
    });
  }

  // DoShopRegister(form:NgForm){
  //   console.log("Store Registered successfully !!!");
  //   console.log(form.value);
  //   this.userser.ShopRegisteration(form.value).subscribe((data:string)=>{
  //     console.log(data);
  //     this.msg=data;
  //     form.reset();
  //   },(error:any)=>{
  //       console.log(error);
  //       this.msg="something went wrong";
  //   })
  // }


  DoEditShop(form:NgForm){

    form.value._id=this.shopData._id;

    console.log(form.value);

    this.userser.editSingleShopData(form.value).subscribe((data:string)=>{
      this.msg=data;
      this.myrout.navigateByUrl("/store_finder")
    },(error)=>{
      this.msg="Something went wrong"
      console.log(error);
    });
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
