import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public userSer:ApiService, public myRouter:Router) { }

  ngOnInit(): void {
  }
  doLogout(){
    localStorage.clear();
    this.myRouter.navigateByUrl("/login");

  }
  move(){
    let a=localStorage.getItem("loggeduser");
    console.log(a);
    this.myRouter.navigateByUrl(`/dashboard/${a}`);
  }

}
