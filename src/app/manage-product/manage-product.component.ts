import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  msg:string;
  products : any[]=[];

  constructor(public userSer: ApiService) { }

  ngOnInit(): void {

    let c=localStorage.getItem("loggeduser Designation");
    let da=localStorage.getItem("loggeduser shop name");
    console.log("designation : ",c);
    console.log("office : ",da);
    console.log(typeof da)

    this.userSer.newgetAllStocks(da).subscribe((data:any[])=>{
      console.log(data);
      this.products=data;

    },(error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong";
    })
  }

  deleteProduct(ProductID : number){
    if(confirm("You Want To Delete Product")){
      console.log("ID"+ProductID);
      this.userSer.Deleteproduct(ProductID).subscribe((data:string)=>{
        this.msg=data;
        window.location.reload();
      },(error : any)=>{
        this.msg="Something Went Wrong";
      });
    }
  }

  SearchProduct(searchproduct : string){
    this.userSer.Searchproduct(searchproduct).subscribe((data:any[])=>{
      console.log(data);
      this.products=data;
    },(error:any)=>{
      console.log(error);
    })
  }

}
