import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlueColor]'
})
export class BlueColorDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'blue';
   }

   @HostListener('click') doSomething() {
     alert('it workes');
   }

   @HostListener('mouseenter') doMouseEnter() {
     console.log('Mouse enter');
   }

   @HostListener('mouseleave') doMouseLeave() {
     console.log('Mouse Leave');
   }

   @HostListener('mousemove') doMouseMove() {
    console.log('Mouse moving!');
   }

  //  @HostListener('document:click', ['$event']) doDocumentClick(elemnt) {
  //   console.log('Mouse clicked', elemnt);
  //  }

}
