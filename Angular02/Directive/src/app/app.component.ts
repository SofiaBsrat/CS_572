import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-mycomponent [items]=names></app-mycomponent>
  `,
  styles: [``]
})
export class AppComponent {
 names=['Assad','Corazza','Shresta'];
}
