import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appEle]'
})
export class EleDirective {
  constructor(el:ElementRef) {
    el.nativeElement.style.color="red";
   }

}
