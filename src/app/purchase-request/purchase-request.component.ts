import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-purchase-request',
  templateUrl: './purchase-request.component.html',
  styleUrls: ['./purchase-request.component.css']
})
export class PurchaseRequestComponent implements OnInit {


  msg:string;
  msg1:string
  Requested : any[]=[];

  constructor(public userSer: ApiService) { }

  ngOnInit(): void {

    let c=localStorage.getItem("loggeduser Designation");
    let da=localStorage.getItem("loggeduser shop name");
    console.log("designation : ",c);
    console.log("office : ",da);
    console.log(typeof da)

    this.userSer.newRequest(da).subscribe((data:any[])=>{
      console.log(data);
      this.Requested=data;
    },(error:any)=>{
      console.log(error);
    })
  }

}
