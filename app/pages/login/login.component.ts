import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
// To Pass paramenters to another page using Navigation extras
import {Router, NavigationExtras} from "@angular/router";

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
        // pass user provided email to next page using NavigationExtras via routing
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "email": this.email
            }
        };
        this.router.navigate(["/verify-password"], navigationExtras);
    }


}