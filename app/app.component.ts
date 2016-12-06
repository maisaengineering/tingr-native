import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  isLoggingIn = false;
  email = "";

  submitEmail() {
    alert("You’re using: " + this.email);
  }

}