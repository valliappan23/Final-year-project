import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-performance',
  templateUrl: './employee-performance.component.html',
  styleUrls: ['./employee-performance.component.css']
})
export class EmployeePerformanceComponent implements OnInit {

  msg:string;
  msg1:string
  users : any[]=[];

  constructor(public userSer: ApiService) { }

  ngOnInit(): void {
    let c=localStorage.getItem("loggeduser Designation");
    let da=localStorage.getItem("loggeduser shop name");
    console.log("designation : ",c);
    console.log("office : ",da);
    console.log(typeof da)
    this.userSer.newgettingusers1(da,c).subscribe((data:any[])=>{
      console.log(data);
      this.users=data;

    },(error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong";
    })
  }

  addattendance(present:string,ID:string){
    let a=Number(present);
    console.log(ID)
    a=a+1;
    console.log(a +" new count");
    let c=localStorage.getItem("loggeduser Designation");
    let da=localStorage.getItem("loggeduser shop name");
    console.log("designation : ",c);
    console.log("office : ",da);
    console.log(typeof da)
   
    let b=a.toString()
    // document.getElementById('tp').innerHTML=present;
    this.userSer.newaddAttendance(ID,b,da).subscribe((data:string)=>{
      console.log(data);
      window.location.reload();
      // this.msg=data;
    },(error:any)=>{
      console.log(error)
    })
  }


  resetattendance(present:string,ID:string){
    let a=Number(present);
    console.log(a);
    let b=a;
    a=0;
    console.log(a)
    let c=a.toString()
    this.userSer.resetAttendance(ID,c).subscribe((data:string)=>{
      console.log(data);
      window.location.reload();
      // this.msg=data;
    },(error:any)=>{
      console.log(error)
    })
  }


  searchattendance(Searchuser : string){
    this.userSer.Searchuser(Searchuser).subscribe((data:any[])=>{
      console.log(data);
      this.users=data;
    },(error :any)=>{
      console.log(error);
    })
  }
}
