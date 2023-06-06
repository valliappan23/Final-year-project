import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  msg:string;
  products : any[]=[];

  constructor(public userSer: ApiService) { }

  ngOnInit(): void {
    let c=localStorage.getItem("loggeduser Designation");
    let da=localStorage.getItem("loggeduser shop name");
    console.log("designation : ",c);
    console.log("office : ",da);
    console.log(typeof da)

    this.userSer.orstatus(da).subscribe((data:any[])=>{
      console.log(data);
      this.products=data;
      
    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong";
    })

  }
}
