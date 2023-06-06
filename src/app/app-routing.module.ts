import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NewAttendanceFormComponent } from './new-attendance-form/new-attendance-form.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import {FindProductComponent} from './find-product/find-product.component';
import { StoreFindComponent } from './store-find/store-find.component';
import { UsermaangementComponent } from './usermaangement/usermaangement.component';
import { StoreinfoComponent } from './storeinfo/storeinfo.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditShopComponent } from './edit-shop/edit-shop.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewShopComponent } from './view-shop/view-shop.component';
import { ViewProductComponent } from './view-product/view-product.component';
import {EmployeePerformanceComponent} from './employee-performance/employee-performance.component';
import {BillComponent} from './bill/bill.component';
import { ManageBillComponent } from './manage-bill/manage-bill.component';
import { SbillComponent } from './sbill/sbill.component';
import { PurchaseRequestComponent } from './purchase-request/purchase-request.component';
import { RecieverRequestComponent } from './reciever-request/reciever-request.component';
import { StatusComponent } from './status/status.component'


const routes: Routes = [
  {path:"", component: HomepageComponent},
  {path:"login", component: LoginComponent},
  {path:"about",component: AboutComponent},
  {path:"register",component: RegisterComponent},
  {path:"product",component: ProductComponent},
  // {path:"attendance",component: AttendanceComponent},
  {path:"new_attendance",component: NewAttendanceFormComponent},
  {path:"add_store",component: AddStoreComponent},
  {path:"dashboard/:userid",component: DashboardComponent},
  {path:"manage_product",component: ManageProductComponent},
  {path:"find_product",component: FindProductComponent},
  {path:"store_finder",component: StoreFindComponent},
  {path:"manage_user",component: UsermaangementComponent},
  {path:"store_info/:shopid",component: StoreinfoComponent},
  {path:"user_info/:Userid",component: UserinfoComponent},
  {path:"product_info/:productid",component:ProductinfoComponent},
  {path:"edit/:USERID",component:EditUserComponent},
  {path:"edit_shop/:shopid",component:EditShopComponent},
  {path:"edit_product/:productid",component:EditProductComponent},
  {path:"employeePerformance",component:EmployeePerformanceComponent},
  {path:"bill",component:BillComponent},
  {path:"manage_bill",component: ManageBillComponent},
  {path:"sbills/:pbill",component: SbillComponent},
  {path:"requested",component: PurchaseRequestComponent},
  {path:"inbox",component: RecieverRequestComponent},
  {path:"status",component: StatusComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
