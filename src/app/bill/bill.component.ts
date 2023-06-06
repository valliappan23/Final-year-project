import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  msg:string;
  products : any[]=[];
  

  constructor( public userSer:ApiService, public myRouter: Router) { }
  // constructor (){}

  ngOnInit(): void {

    let c=localStorage.getItem("loggeduser Designation");
    let da=localStorage.getItem("loggeduser shop name");
    console.log("designation : ",c);
    console.log("office : ",da);
    console.log(typeof da)

    this.userSer.newgetFindAllStocks(da).subscribe((data:any[])=>{
      console.log(data);
      this.products=data;
      localStorage.setItem("Total Cost","0");

    },(error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong";
    })
  }
  

  cost(name:string, compname:string, sp: string, qty:string,stock:string){
    let n=name;
    console.log(name);
    let cmpname=compname;
    let a=Number(sp);
    let b=Number(qty);
    let c=a*b;
    let d=c.toFixed(2);
    console.log(d);
    let e=localStorage.getItem("Total Cost");
    let e1=Number(e);
    let e3=localStorage.removeItem("Total Cost")
    console.log(localStorage.getItem("Total Cost"));
    let f=Number(e1)+Number(d);
    console.log(f);
    localStorage.setItem("Total Cost",String(f));
    console.log(localStorage.getItem("Total Cost"));

    let bn=localStorage.getItem("bill number");

    // console.log(bn);
    let cn=localStorage.getItem("Customer Name");
    // console.log(cn)

    let ph=localStorage.getItem("phone number");
    // console.log(ph)

    this.userSer.addBill(cmpname,bn,cn,ph,n,a,b,d,f).subscribe((data:string)=>{
      console.log(data);
    },(error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong";
    })

    let stk=stock;
    let stk1=Number(stk);
    let newStk=stk1-b;
    console.log(newStk);
    let k=newStk.toString()

    this.userSer.updatestock(name,k).subscribe((data:string)=>{
      console.log(data);
    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong";
    })




    alert("product added successfully !!");


    
    
    
    
    

  }



  findTc(){
    let c1=localStorage.getItem("Customer Name");
    let p1=localStorage.getItem("phone number");
    let b1=localStorage.getItem("bill number");
    let e=localStorage.getItem("Total Cost");
    let e1="₹ "+e;
    let  k=localStorage.getItem("loggeduser shop name");
    document.getElementById('tc').innerHTML=e1;
    this.userSer.totalCost(b1,e,c1,p1,k).subscribe((data:string)=>{
      console.log(data);
    },(error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong";
    })
  }

  bill(bn : string){
    localStorage.setItem("bill number",bn);
  }

  name(cn : string){
    localStorage.setItem("Customer Name",cn);
  }

  
  ph(contact : string){

    localStorage.setItem("phone number",contact);

  }

  mails(mail : string){

    localStorage.setItem("mail id",mail);

  }
  billing(){
    console.log("Hi");
    let a=localStorage.getItem("Total Cost");
    let b=localStorage.getItem("mail id");
    let c=localStorage.getItem("phone number");
    let d=localStorage.getItem("Customer Name");
    let e=localStorage.getItem("bill number");


    console.log(b);


        let u="https://pages.razorpay.com/pl_LbzVAEthOsV82D/view?amount="+a+"&email="+b+"&phone="+c+"&name="+d+"&bill="+e;
        // window.location.href=u;
        window.open(u,'_blank')
    // this.myRouter.navigateByUrl(`https://rzp.io/l/MyjD0D8Uq/view?Amount=${a}`);
    // this.myRouter.navigateByUrl(`https://pages.razorpay.com/pl_LbzVAEthOsV82D/view?amount=${a}`);
    
  }

  searchbill(prodSearch : string){
    this.userSer.searchBill(prodSearch).subscribe((data:any)=>{
      console.log(data);
      this.products=data;
    },(error:any)=>{
      console.log(error);
      this.msg='something went wrong'
    })
  }

}