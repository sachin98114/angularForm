import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  open(_val: any) {
    console.log("outpur", _val)
  };
  getdata(val:any){
    console.log(val)
  }
}
