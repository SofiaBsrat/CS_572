import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><app-counter [counterValue]=componentCounterValue (counterchange)="setcomponent($event)"></app-counter></div>
  <br>
Component Counter Value={{componentCounterValue}}`
  ,

 
})
export class AppComponent {
  componentCounterValue=5;
  setcomponent(event){
    this.componentCounterValue=event;

  }

}
