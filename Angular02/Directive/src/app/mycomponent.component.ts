import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  template:`
  <input #box (keyup)='0'/>{{box.value}}
  <p appMynewcolor [colorvalue]="'red'" (outputcolor)="setcolor($event)" >Teachers</p>
  <ul appMyvisibility [switch]=false>
  <li  *ngFor="let item of items" > {{item}}</li>
  </ul>
  <p>An elemnt changed its color to: {{clr}}</p>
  `,
  styles: []
})
export class MycomponentComponent implements OnInit {
  clr;
  value="black";

  @Input() items=['ella','ema','sam'];

  constructor() { }

  setcolor(e){
    this.clr=e;

  }

  ngOnInit() {
  }

}
