import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-storeinfo',
  templateUrl: './storeinfo.component.html',
  styleUrls: ['./storeinfo.component.css']
})
export class StoreinfoComponent implements OnInit {
  shopdata : {_id:Number,sname:String,sphone:String,saddr:String,sid:String,stype:String,sownership:String,semail:String,span:String}

  constructor(public activateRoute : ActivatedRoute,public UserSer: ApiService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param:Params)=>{
      console.log(param['shopid']);
      if(param['shopid']){
        this.UserSer.ViewStoreData(param['shopid']).subscribe((data:any[])=>{
          console.log(data);
          this.shopdata=data[0];
        },(error : any)=>{
          console.log(error);
        });
      }
    })
  }

}
