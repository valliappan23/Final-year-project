import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { FindProductComponent } from './find-product/find-product.component';
import { NewAttendanceFormComponent } from './new-attendance-form/new-attendance-form.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { StoreFindComponent } from './store-find/store-find.component';
import { StoreinfoComponent } from './storeinfo/storeinfo.component';
import { UsermaangementComponent } from './usermaangement/usermaangement.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditShopComponent } from './edit-shop/edit-shop.component';
import { ViewShopComponent } from './view-shop/view-shop.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { EmployeePerformanceComponent } from './employee-performance/employee-performance.component';
import { BillComponent } from './bill/bill.component';
import { ManageBillComponent } from './manage-bill/manage-bill.component';
import { SbillComponent } from './sbill/sbill.component';
import { PurchaseRequestComponent } from './purchase-request/purchase-request.component';
import { RecieverRequestComponent } from './reciever-request/reciever-request.component';
import { StatusComponent } from './status/status.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MenuComponent,
    AboutComponent,
    ProductComponent,
    AttendanceComponent,
    ManageProductComponent,
    FindProductComponent,
    NewAttendanceFormComponent,
    AddStoreComponent,
    ViewComponent,
    StoreFindComponent,
    StoreinfoComponent,
    UsermaangementComponent,
    UserinfoComponent,
    ProductinfoComponent,
    EditUserComponent,
    ViewUserComponent,
    EditProductComponent,
    ViewProductComponent,
    EditShopComponent,
    ViewShopComponent,
    ViewComponentComponent,
    EmployeePerformanceComponent,
    BillComponent,
    ManageBillComponent,
    SbillComponent,
    PurchaseRequestComponent,
    RecieverRequestComponent,
    StatusComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
