import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-manage-bill',
  templateUrl: './manage-bill.component.html',
  styleUrls: ['./manage-bill.component.css']
})
export class ManageBillComponent implements OnInit {

  msg:string;
  bills : any[]=[];

  constructor(public userSer: ApiService) { }
  

  ngOnInit(): void {
    // this.userSer.getAllBills().subscribe((data:any[])=>{
    //   console.log(data);
    //   this.bills=data;
    // },(error:any)=>{
    //   console.log(error);
    //   this.msg="something went wrong"
    // })

    let c=localStorage.getItem("loggeduser Designation");
    let da=localStorage.getItem("loggeduser shop name");
    console.log("designation : ",c);
    console.log("office : ",da);
    console.log(typeof da)

    this.userSer.newgetAllBills(da).subscribe((data:any[])=>{
      console.log(data);
      this.bills=data;

    },(error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong";
    })
  }


  searchbill(billSearch : string){
    this.userSer.searchBills(billSearch).subscribe((data:any)=>{
      console.log(data);
      this.bills=data;
    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong";
    })
  }

  bill(billNO:string){
    // localStorage.setItem("bill",billNO);
    
    if(confirm("You Want To Delete Product")){
      console.log("bill No "+billNO);
      this.userSer.Deletebill(billNO).subscribe((data:string)=>{
        this.msg=data;
        window.location.reload();
      },(error : any)=>{
        this.msg="Something Went Wrong";
      });

      this.userSer.DeleteTbill(billNO).subscribe((data:string)=>{
        this.msg=data;
        window.location.reload();
      },(error : any)=>{
        this.msg="Something Went Wrong";
      });
    }
  }

}
