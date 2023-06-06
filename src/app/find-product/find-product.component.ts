import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {

  msg:string;
  products : any[]=[];

  constructor( public userSer:ApiService, public myRouter: Router) { }
  // constructor (){}

  ngOnInit(): void {

    this.userSer.getFindAllStocks1().subscribe((data:any[])=>{
      console.log(data);
      this.products=data;

    },(error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong";
    })
  }

  // request(quantity: string, name: string){
  //   console.log("qty : ", quantity);
  //   console.log("name : ", name);
  //   var message="NEEDED "+quantity+" quantity of "+name;
  //   console.log(message);
  // }

  request(name:string,cname:string,quantity: string){
    //supplier
    console.log("name : ",name);
    console.log("qty : ",quantity);
    console.log("supplier : ",cname);
    //consumer
    let c=localStorage.getItem("loggeduser Designation");
    let da=localStorage.getItem("loggeduser shop name");
    console.log("designation : ",c);
    console.log("office : ",da);
    console.log(typeof da);
    this.userSer.newsupplier(name,quantity,cname,c,da).subscribe((data:string)=>{
      console.log(data);
      this.msg="product requested";
      window.location.reload();
    },(error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong";
    })
    
  }

  searchProduct(prod:string){
    this.userSer.searchp1(prod).subscribe((data:any)=>{
      console.log(data);
      this.products=data;
    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong";
    })
  }

}
