import { View } from "ui/core/view";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "dashboard",
    providers: [],
    templateUrl: "pages/dashboard/index.html",
    styleUrls: []
})
export class DashboardComponent implements OnInit {
    public email: string;

    ngOnInit() {
        this.page.actionBarHidden = true;
        // this.page.backgroundImage = "res://bg_login";
    }

    constructor(private router: Router, private route: ActivatedRoute, private page: Page) {

    }

}