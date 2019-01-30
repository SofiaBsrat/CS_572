import { Directive, Input, ElementRef,HostListener, Output ,EventEmitter} from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';


@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {

  @Input() colorvalue; 

  @Output() outputcolor=new EventEmitter();

  constructor( private e:ElementRef) {   }

  @HostListener('click')fun(){
    this.e.nativeElement.style.color=this.colorvalue;
   this. outputcolor.emit(this.colorvalue);
  }

}
