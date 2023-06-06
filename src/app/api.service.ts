import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  DoUserRegistraton(data:any){
    return this.http.post<string>("http://localhost:5000/register",data);
  }
  ProductRegisteration(data:any){
    return this.http.post<string>("http://localhost:5000/addProduct",data);
  }
  ShopRegisteration(data:any){
    return this.http.post<string>("http://localhost:5000/addShop",data);
  }
  DoUserLogin(data:any){
    return this.http.post<any[]>("http://localhost:5000/login",data);
    
  }
  isLoggedin(){
    console.log("true");
    return !!localStorage.getItem("loggeduser");
  }
  getDahboardData(UserId : String){
    return this.http.get<any[]>("http://localhost:5000/DashboardData/"+UserId);
  }
  getAllStocks(){
    
    return this.http.get<any[]>("http://localhost:5000/allStocks/");
  }

  newgetAllStocks(da:string){
    console.log(da);
    return this.http.get<any[]>("http://localhost:5000/newallStocks/"+da);
  }


  getAllUsers(){
   
    return this.http.get<any[]>("http://localhost:5000/allUsers");
  }


  newgettingusers(da:String){
    console.log(da);
   
    return this.http.get<any[]>("http://localhost:5000/newallUsers/"+da);
  }


  newgettingusers1(da:String, c:String){
    console.log(da);
   let k=da+'-'+c;
    return this.http.get<any[]>("http://localhost:5000/newallUsers1/"+k);
  }



 




  





  getFindAllStocks(){
    return this.http.get<any[]>("http://localhost:5000/FindallStocks");
  }

  getFindAllStocks1(){
    return this.http.get<any[]>("http://localhost:5000/newFindallStocks1");
  }

  newgetFindAllStocks(da:String){
    console.log(da);
    return this.http.get<any[]>("http://localhost:5000/newFindallStocks/"+da);
  }

  getStoreDetails(){
    return this.http.get<any[]>("http://localhost:5000/store_details");
  }
  
  ShopIdAvailability(shopId : String){
    return this.http.get<any[]>("http://localhost:5000/shop_id_CHECK/"+shopId);
  }

  UserIdAvailability(userId : String){
    return this.http.get<any[]>("http://localhost:5000/user_id_CHECK/"+userId);
  }
  ProductIdAvailability(prodId:string){
    return this.http.get<any[]>("http://localhost:5000/prod_id_CHECK/"+prodId);
  }
  getSingleUserData(userid:string){
    return this.http.get<any[]>("http://localhost:5000/getuser/"+userid);
  }
  getSingleShopData(shopid:string){
    return this.http.get<any[]>("http://localhost:5000/getshop/"+shopid);
  }
  getSingleProductData(prodcid:string){
    return this.http.get<any[]>("http://localhost:5000/getproduct/"+prodcid);
  }

  editSingleUserData(data:any[]){
    return this.http.put<string>("http://localhost:5000/updateUser",data);
  }
  editSingleShopData(data:any[]){
    return this.http.put<string>("http://localhost:5000/updateShop",data);
  }
  editSingleProductData(data:any[]){
    return this.http.put<string>("http://localhost:5000/updateProduct",data);
  }
  ViewUserData(UserId : String){
    return this.http.get<any[]>("http://localhost:5000/ViewUserData/"+UserId);
  }

  ViewProductData(ProdId : String){
    return this.http.get<any[]>("http://localhost:5000/ViewProductData/"+ProdId);
  }
  ViewStoreData(StoreId : String){
    console.log(StoreId);
    return this.http.get<any[]>("http://localhost:5000/ViewStoreData/"+StoreId);
  }

  DeleteUser(strID: number){
    return this.http.delete<string>("http://localhost:5000/DeleteUser/"+strID);
  }

  Deleteproduct(prodID: number){
    return this.http.delete<string>("http://localhost:5000/DeleteProduct/"+prodID);
  }

  Deleteshop(shpID: number){
    return this.http.delete<string>("http://localhost:5000/DeleteShop/"+shpID);
  }

  Searchproduct(searchTXT : string){
    return this.http.get<any[]>("http://localhost:5000/SearchProduct/"+searchTXT);
  }

  Searchuser(searchTXT : string){

    let da=localStorage.getItem("loggeduser shop name");
    console.log("office ",da);
    return this.http.get<any[]>("http://localhost:5000/SearchUser/"+searchTXT+"/"+da);
  }

  

  Searchshop(searchTXT : string){
    return this.http.get<any[]>("http://localhost:5000/SearchShop/"+searchTXT);
  }

  // addAttendance(ID:string,data:string){
  //   console.log()
  //   const myData = {
  //     ID,
  //     data
  //   }
  //   return this.http.put<any>("http://localhost:5000/addAttendance/",myData);
  // }

  newaddAttendance(ID:string,data:string,da:string){
    const myData={
      ID,data,da
    }
    return this.http.put<any>("http://localhost:5000/addAttendance/",myData)

  }

  resetAttendance(ID:string,data:string){
    console.log()
    const myData = {
      ID,
      data
    }
    return this.http.put<any>("http://localhost:5000/resetAttendance/",myData);
  }

  addBill(NameComp:string,billNo:string,custName:string,phone:string,product:string,sellingPrice:number,qty:number,subTotal:string,total:number){

  const billData={
    NameComp,billNo,custName,phone,product,sellingPrice,qty,subTotal,total
  }
  return this.http.put<any>("http://localhost:5000/addBill/",billData);


  }

  totalCost(billNo:string,cost:string,customer:string,phone:string, company:string){
    const tc={
      billNo,cost,customer,phone,company
    }
    return this.http.put<any>("http://localhost:5000/totalCost/",tc);

  }


  newgetAllBills(da:String){
    console.log(da);
    return this.http.get<any[]>("http://localhost:5000/newallBills/"+da);
  }







  // getAllBills(){
  //   return this.http.get<any[]>("http://localhost:5000/allBills");
  // }

  getParticularBills(bill : string){
    return this.http.get<any[]>("http://localhost:5000/par_bills/"+bill);
  }

  updatestock(prodname:string,newqty:string){

    console.log()
    const produData = {
      prodname,
      newqty
    }
    return this.http.put<any>("http://localhost:5000/updatingStock/",produData);

  }

  searchBill(prod:string){
    console.log(prod)
    return this.http.get<any[]>("http://localhost:5000/Searchprods/"+prod);
  }

  searchBills(bill:string){
    console.log(bill)
    return this.http.get<any[]>("http://localhost:5000/Searchbills/"+bill);
  }

  // searchprods1(prods:string){
  //   console.log(prods)
  //   return this.http.get<any[]>("http://localhost:5000/Searchprods1/"+prods);
  // }

  searchp1(pro:string){
    return this.http.get<any[]>("http://localhost:5000/SearchP/"+pro);
  }


  isEmployee(){
  let job_role=localStorage["loggeduser Designation"];
  console.log(job_role);

  let office=localStorage["loggeduser shop name"];
  console.log(office);


  let jr=job_role.toLowerCase();
  console.log(jr);

  if(jr === "employee"){
    // console.log("falsee varuthuu");
    return false;
  }
  else{
    // return true;

    if(jr==="manager"){
      let a="employee";
      console.log("FIND FOR EMPLOYEE");
      return this.getManager();
    }
    return true;
    
  }
  }

  getManager(){
    return this.http.get<any[]>("http://localhost:5000/manager");
  }


  isManager(){
    let job_role=localStorage["loggeduser Designation"];
    console.log(job_role);
  
    let office=localStorage["loggeduser shop name"];
    console.log(office);
  
  
    let jr=job_role.toLowerCase();
    console.log(jr);
  
    if(jr === "manager"){
      // console.log("falsee varuthuu");
      return false;
    }
    else{
      return true;
    }
    }


    isOwner(){
      let job_role=localStorage["loggeduser Designation"];
      console.log(job_role);
    
      let office=localStorage["loggeduser shop name"];
      console.log(office);
    
    
      let jr=job_role.toLowerCase();
      console.log(jr);
    
      if(jr === "owner"){
        // console.log("falsee varuthuu");
        return false;
      }
      else{
        return true;
      }
      }

      Deletebill(bill: string){
        return this.http.delete<string>("http://localhost:5000/Deletebill/"+bill);
      }

      DeleteTbill(bill: string){
        return this.http.delete<string>("http://localhost:5000/DeleteTbill/"+bill);
      }
  newsupplier(pname:string,pqty:string,prodcomp:string,fdesignation:string,foffice:string){
    const RequestData={
      pname,pqty,prodcomp,fdesignation,foffice
    }
    console.log(RequestData);
    return this.http.put<any>("http://localhost:5000/newRequest/",RequestData);
  
  }

  newRequest(da: String){
    console.log(da);
    return this.http.get<any[]>("http://localhost:5000/requested/"+da);
  }

  newInbox(da: String){
    console.log(da);
    return this.http.get<any[]>("http://localhost:5000/inbox/"+da);
  }

  accept(pname:string,pqty:string,roffice:string,pdesignation:string,poffice:string,message:string){
    const statusdata={
      pname,pqty,roffice,pdesignation,poffice,message
    }
    console.log(statusdata);
    return this.http.put<any>("http://localhost:5000/ac/",statusdata);
  }

  decline(pname:string,pqty:string,roffice:string,pdesignation:string,poffice:string,message:string){
    const statusdata={
      pname,pqty,roffice,pdesignation,poffice,message
    }
    console.log(statusdata);
    return this.http.put<any>("http://localhost:5000/de/",statusdata);
  }

  orstatus(office : string){
    return this.http.get<any>("http://localhost:5000/status/"+office);
  }

}
