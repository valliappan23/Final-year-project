import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sbill',
  templateUrl: './sbill.component.html',
  styleUrls: ['./sbill.component.css']
})
export class SbillComponent implements OnInit {

  msg:string;
  billData: any[]=[];
  

  constructor(public activateRoute : ActivatedRoute,public UserSer: ApiService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe((param:Params)=>{
      console.log(param['pbill']);
      if(param['pbill']){
        this.UserSer.getParticularBills(param['pbill']).subscribe((data:any[])=>{
          console.log(data);
          this.billData=data;
        },(error:any)=>{
          console.log(error);
          this.msg="Something Went Wrong";
        })
      }
    })

  }

  // searchprod(prod:string){
  //   this.UserSer.searchprods1(prod).subscribe((data:any)=>{
  //     console.log(data);
  //     this.billData=data;
  //   },(error:any)=>{
  //     console.log(error);
  //     this.msg="something went wrong";
  //   })
  // }

}
