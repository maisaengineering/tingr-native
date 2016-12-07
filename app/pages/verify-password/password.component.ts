import { View } from "ui/core/view";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";

import { Teacher } from "../../shared/teacher/teacher";
import { TeacherService } from "../../shared/teacher/teacher.service";
import { Page } from "ui/page";

@Component({
    selector: "my-app",
    providers: [TeacherService],
    templateUrl: "pages/verify-password/password.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class VerifyPasswordComponent implements OnInit {
    teacher: Teacher;
    public email: string;

    ngOnInit() {
        this.page.actionBarHidden = true;
        // this.page.backgroundImage = "res://bg_login";
    }


    constructor(private router: Router, private route: ActivatedRoute, private teacherService: TeacherService, private page: Page) {
        this.teacher = new Teacher();
        this.route.queryParams.subscribe(params => {
            this.teacher.email = params["email"];
        });
    }

    submitPassword() {
        console.log("Email: " + this.teacher.email);
        console.log("Password: " + this.teacher.password);
        this.router.navigate(["dashboard"]);
    }

    forgotPassword() {
        //TODO: to define
    }


}