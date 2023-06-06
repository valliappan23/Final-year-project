import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-attendance-form',
  templateUrl: './new-attendance-form.component.html',
  styleUrls: ['./new-attendance-form.component.css']
})
export class NewAttendanceFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  DoRegister(form:NgForm){
    console.log("User added in attendance successfully !!!");
    console.log(form.value);
    form.reset();
  }

}
