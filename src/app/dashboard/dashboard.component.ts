import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userdata : {_id:Number,uname:String,cname:String,uaddr:String,uid:String,udob:String,udoj:String,uemail:String,uphone:String,cdesignation:String,cgender:String,upassword:String,usalary:String,uattain:String};
  constructor(public activateRoute : ActivatedRoute,public UserSer: ApiService) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param:Params)=>{
      console.log(param['userid']);
      if(param['userid']){
        this.UserSer.getDahboardData(param['userid']).subscribe((data:any[])=>{
          console.log(data);
          this.userdata=data[0];
        },(error:any)=>{
          console.log(error);
        });
      }
    })
    
  }

  findSalary(attain:String,salary:String){
    console.log("Attain : ",attain);
    console.log("salary : ",salary);
    let k=30
    let f=Number(salary)/k;
    let f1=f*Number(attain);
    let f11=f1.toFixed(2);
    let j="₹ "+f11
    console.log("Earned salary : ",f11);
    document.getElementById('tc').innerHTML=j;
  }

}

