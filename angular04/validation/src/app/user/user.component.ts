import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from './user';
import { PostService } from '../service/post';

@Component({
    selector: 'app-user-form',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    submitted: boolean = false;
    user: User;
    userInfo;
    postInfo;

    constructor(public postService: PostService, private router: Router) {
        this.user = new User(null, null, null)
    }

    ngOnInit() {
        this.postService.getUser().subscribe(u => this.userInfo = u);
        this.postService.getPosts().subscribe(
            (x) => { this.postInfo = x }
        );
    }

    getData() {
        this.user.name = this.userInfo.name;
        this.user.email = this.userInfo.email;
        let str: string;
        this.postInfo.forEach(el => {
            str = str + (el.title + "\n");
        });
        this.user.post = str;
    }

    onSubmit(form) {
        console.log(form.value);
        this.router.navigate(['thank-you'])
    }

}
