import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-thank-you',
    template: `
    <div class="container">
        <div class="col"><h1>Thank you</h1></div>
    </div>            
         
  `,
    styles: ["@import url('https://unpkg.com/bootstrap@4.1.1/dist/css/bootstrap.min.css');"]
})
export class ThankYouComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
