import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "my-app",
    providers: [],
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    isLoggingIn = false;
    email = '';

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    constructor(private router: Router, private page: Page) {
        this.email = "user@nativescript.org";
    }

    submitEmail() {
        console.log("Email: " + this.email);
        this.router.navigate(["/verify-password"]);
    }


}