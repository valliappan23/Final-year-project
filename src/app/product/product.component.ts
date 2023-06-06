import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  msg : string;
  msg1 : string;
  userIdAvailable=false;

  constructor(public userser:ApiService) { }

  ngOnInit(): void {
  }
  DoProductRegister(form:NgForm){
    console.log("Product Registered successfully !!!");
    console.log(form.value);

    this.userser.ProductRegisteration(form.value).subscribe((data:string)=>{
      console.log(data);
      this.msg=data;
      form.reset();
      window.location.reload();
    },(error:any)=>{
        console.log(error);
        this.msg="something went wrong";
    })
    
  }
  
  checkProdIdAvail(prodId : string){
    this.userser.ProductIdAvailability(prodId).subscribe((data:any[])=>{
      console.log(data);
      if(data.length==0){
        this.msg1="Product ID is available";
        this.userIdAvailable=true;
      }
      else{
        this.msg1="product ID is not availble Try some other Id"
        this.userIdAvailable=false;
      }
    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong";
    })
  }

}
