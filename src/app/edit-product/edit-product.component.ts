import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  msg : string;
  
  productData={_id:Number,pname:String,pqty:String,pprice:String,pselling:String,pc:String,pbuying:String,pdob:String,pbill:String,pid:String};

  constructor(public userser:ApiService, public activeRoute: ActivatedRoute, public myrout : Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param:Params)=>{
      console.log(param['productid']);
      if(param['productid']){
        this.userser.getSingleProductData(param['productid']).subscribe((data:any[])=>{
          console.log(data);
          this.productData=data[0];
        },(error)=>{
          console.log(error);
        })
      }
    });
  }
  // DoProductRegister(form:NgForm){
  //   console.log("Product Registered successfully !!!");
  //   console.log(form.value);

  //   this.userser.ProductRegisteration(form.value).subscribe((data:string)=>{
  //     console.log(data);
  //     this.msg=data;
  //     form.reset();
  //   },(error:any)=>{
  //       console.log(error);
  //       this.msg="something went wrong";
  //   })
    
  // }

  DoEditProduct(form:NgForm){

    form.value._id=this.productData._id;
    console.log(form.value);

    this.userser.editSingleProductData(form.value).subscribe((data:string)=>{
      this.msg=data;
      this.myrout.navigateByUrl("/manage_product")
    },(error)=>{
      console.log(error);
      this.msg="Something went wrong";
    });
  }

  

}