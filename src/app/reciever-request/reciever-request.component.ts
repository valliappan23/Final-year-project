import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reciever-request',
  templateUrl: './reciever-request.component.html',
  styleUrls: ['./reciever-request.component.css']
})
export class RecieverRequestComponent implements OnInit {

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

    this.userSer.newInbox(da).subscribe((data:any[])=>{
      console.log(data);
      this.Requested=data;
    },(error:any)=>{
      console.log(error);
    })

  }

  Sending(prod:string,qty:string,off:string){

    console.log("product name : ",prod);
    console.log("quantity : ",qty);
    console.log("purchaser offoce : ",off)


    let c=localStorage.getItem("loggeduser Designation");
    let da=localStorage.getItem("loggeduser shop name");
    console.log("Sender designation : ",c);
    console.log("sender office : ",da);
    console.log(typeof da)

    let a="Accepted";
    console.log(a);

    this.userSer.accept(prod,qty,off,c,da,a).subscribe((data:string)=>{
      console.log(data);
      window.location.reload();
    },(error:any)=>{
      console.log(error);
    })
    
  }

  Decline(prod:string,qty:string,off:string){

    console.log("product name : ",prod);
    console.log("quantity : ",qty);
    console.log("purchaser offoce : ",off)


    let c=localStorage.getItem("loggeduser Designation");
    let da=localStorage.getItem("loggeduser shop name");
    console.log("Sender designation : ",c);
    console.log("sender office : ",da);
    console.log(typeof da)

    let a="Decline";
    console.log(a);

    this.userSer.decline(prod,qty,off,c,da,a).subscribe((data:string)=>{
      console.log(data);
      window.location.reload();
    },(error:any)=>{
      console.log(error);
    })
    
  }

}
