import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-store-find',
  templateUrl: './store-find.component.html',
  styleUrls: ['./store-find.component.css']
})
export class StoreFindComponent implements OnInit {

  msg:string;
  stores : any[]=[];

  constructor(public userSer:ApiService, public myRouter: Router) { }

  ngOnInit(): void {

    this.userSer.getStoreDetails().subscribe((data:any[])=>{
      console.log(data);
      this.stores=data;

    },(error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong";
    })

  }

  deleteStore(StoreID : number){
    if(confirm("You Want To Delete Store")){
      console.log("ID"+StoreID);
      this.userSer.Deleteshop(StoreID).subscribe((data:string)=>{
        this.msg=data;
        window.location.reload();
      },(error : any)=>{
        console.log(error);
        this.msg="Something Went Wrong";
      });
    }
  }

  SearchStore(searchstore : string){
    this.userSer.Searchshop(searchstore).subscribe((data:any[])=>{
      console.log(data);
      this.stores=data;
    },(error:any)=>{
      console.log(error);
    })
  }

}
