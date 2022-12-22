import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,AfterViewInit, OnChanges{
  ngOnChanges(_changes: SimpleChanges): void {
    // console.log("::::::data")
  }
  
  ngAfterViewInit(): void {
    // console.log(":::::::this.open",this.open)
    
  }
  ngOnInit(): void {
  }

  title = 'Forms';
  alue: any;
  name: string|undefined;
  getdata(data:NgForm){
    console.log(data);
    this.alue=data
  }

  open(_val:any){
     console.log(":::::", _val)
  };
  

  products=[{'naam':'1'}]

  


}
