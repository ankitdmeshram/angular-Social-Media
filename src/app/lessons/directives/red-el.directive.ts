import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEL]'
})
export class RedELDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = 'red'
    el.nativeElement.innerText = 'hello world'
   }

}
