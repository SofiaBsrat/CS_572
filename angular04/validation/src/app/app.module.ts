import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './service/post'

import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ThankYouComponent } from './thank-you.component';


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        ThankYouComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'thank-you', component: ThankYouComponent },
            { path: '', component: UserComponent }

        ])
    ],
    providers: [PostService],
    bootstrap: [AppComponent]
})
export class AppModule { }
