import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usermaangement',
  templateUrl: './usermaangement.component.html',
  styleUrls: ['./usermaangement.component.css']
})
export class UsermaangementComponent implements OnInit {

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

  deleteUser(UserID : number){
    if(confirm("You Want To Delete User")){
      console.log("ID"+UserID);
      this.userSer.DeleteUser(UserID).subscribe((data:string)=>{
        this.msg=data;
      },(error:any)=>{
        this.msg="Something Went Wrong";
      });
    }
  }

  SearchUser(Searchuser : string){
    let da=localStorage.getItem("loggeduser shop name");
    console.log(da);
    this.userSer.Searchuser(Searchuser).subscribe((data:any[])=>{
      console.log(data);
      this.users=data;
    },(error :any)=>{
      console.log(error);
    })
    
  }

}
