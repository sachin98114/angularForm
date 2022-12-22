import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {
  name: string = '';
  dob: string = '';
  colors: string = '';
  setisfied: string = '';
  password: string = '';
  username:string="";
  select:string="";
  range:any="";
  submitted:boolean=false;


  Date=new Date;
  constructor() { }

  ngOnInit(): void {
  }
  submit() {
   
    console.log(this.name, this.dob, this.colors, this.setisfied, this.password, this.username , this.select , this.range)
     this.submitted=true;
  }


  
  handleCheck(e: any) {
    this.select = e.target.value;
    console.log("::::::::::::",e.target.defaultValue)
  }
  column(r:any){
   this.colors=r.target.value;
     }
}



