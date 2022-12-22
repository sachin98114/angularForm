import { Component, OnInit } from '@angular/core';
// interface objec {
//   user: string ;
//   email: string ;
//   password: string ;
//   gender: string ;
//   select: string ;
//   arr: any;
//   dropDownValue: string ;
//   checkBoxSelect: any;
//   checkbox: any;
//   carcolor: any ;
//   col: any;
//   obj2: any ;
//   colors:any;
//   submitted:boolean;

// }
@Component({
  selector: 'app-templiteral-forms',
  templateUrl: './templiteral-forms.component.html',
  styleUrls: ['./templiteral-forms.component.css'],
})
export class TempliteralFormsComponent implements OnInit {
  user: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  select: string = '';
  arr: any = [];
  dropDownValue: string = '';
  checkBoxSelect: any;
  checkbox: any;
  carcolor: any = '';
  col: any;
  obj2: any = {};
  colors:any;
  submitted:boolean=false;
  objec: { name: string; Email: string; password: string; gender: string; Transport: any; Fuel: any; color: any; } | undefined;


  constructor() {}
  obj: any[] | undefined;
  value: any = ['CAR', 'BIKE', 'CYCLE', 'BUS', 'TRAIN', 'AEROPLANE'];
  color: any = ['red', 'blue', 'Black', 'Orange', 'Pink', 'Purple'];
  ngOnInit(): void {}

  submit() {
    // this.submitted=true;
    // // console.log(this.user + '---' + this.email + '---' + this.password,this.gender);
    // // console.log(this.obj);
    // this.arr.push(this.user);
    // this.arr.push(this.email);
    // this.arr.push(this.password);
    // this.arr.push(this.gender);
    // this.arr.push(this.dropDownValue);
    // this.arr.push(this.checkBoxSelect);
    // this.arr.push(this.carcolor);
    // console.log(this.arr);

    // this.obj2 = {
    //   name: this.arr[0],
    //   Email: this.arr[1],
    //   password: this.arr[2],
    //   gender: this.arr[3],
    //   Transport: this.arr[4],
    //   Fuel: this.arr[5],
    //   color: this.arr[6],
    // };
    // console.log(this.obj2);
    // console.log(this.obj2.key);
    // localStorage.setItem('value', this.obj2);







    object:this.objec= {
      name: this.user,
      Email: this.email,
      password: this.password,
      gender: this.gender,
      Transport: this.dropDownValue,
      Fuel: this.checkBoxSelect,
      color: this.carcolor,
    };
    console.log(this.objec)
    // this.arr = [];
  }

  selectValue(e: any) {
    this.dropDownValue = e.target.value;
  }
  
  handleCheck(e: any) {
    this.checkBoxSelect = e.target.value;
  }


  carcol(e: any) {
    this.carcolor = e.target.value;
  }
     column(r:any){
   this.colors=r.target.value;
     }
}
