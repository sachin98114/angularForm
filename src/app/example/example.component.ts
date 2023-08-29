import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  // arr=[1,2,3,4,5,6,7,8,9];
  show: boolean = false;
  ngOnInit(): void {
    // window.addEventListener('scroll',this.onWindowScroll,true);
    //   this.arr.map((element:any,index) => {
    //     console.log(element,index)
    //   });
    //   console.log(this.arr.length)
  }

  title = 'One-Way Data Binding Example';
  name = '';
  inpval = "";
  valueChange() {
    this.name = this.inpval
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.show = window.pageYOffset >= 110;
    console.log(this.show)
    console.log('Window scrolled', window.pageYOffset);
    if (this.show) {
      this.show = true;
    }
  }
  @HostListener('click', ['$event'])
  click() {
    alert("hello angular you just to try anhother component");
  }
}
 