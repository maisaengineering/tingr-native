import { Color } from "color";
import { View } from "ui/core/view";
import { Router } from "@angular/router";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Teacher } from "../../shared/teacher/teacher";
import { TeacherService } from "../../shared/teacher/teacher.service";
import { Page } from "ui/page";

@Component({
    selector: "my-app",
    providers: [TeacherService],
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    teacher: Teacher;
    isLoggingIn = true;
    @ViewChild("container") container: ElementRef;

    ngOnInit() {
        this.page.actionBarHidden = true;
       // this.page.backgroundImage = "res://bg_login";
    }


    constructor(private router: Router, private teacherService: TeacherService, private page: Page) {
        this.teacher = new Teacher();
        this.teacher.email = "user@nativescript.org";
        this.teacher.password = "password";
    }

    submitEmail() {
        console.log("Email: " + this.teacher.email)
    }


}