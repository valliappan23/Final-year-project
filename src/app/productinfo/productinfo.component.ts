import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  proddata : {_id:Number,pname:String,pqty:String,pid:String,pprice:String,pselling:String,pc:String,pbuying:String,pdob:String,pbill:String}

  constructor(public activateRoute : ActivatedRoute,public UserSer: ApiService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param:Params)=>{
      console.log(param['productid']);
      if(param['productid']){
        this.UserSer.ViewProductData(param['productid']).subscribe((data:any[])=>{
          console.log(data);
          this.proddata=data[0];
        },(error : any)=>{
          console.log(error);
        });
      }
    })
  }

}
