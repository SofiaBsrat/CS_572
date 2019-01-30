import { Directive, ElementRef,Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input() switch;
  constructor(private e:ElementRef) {
 
  }


  ngOnInit() { // reached after all bound properties are initilized
    if(this.switch) 
    this.e.nativeElement.style.visibility="hidden";
  }
 
}
