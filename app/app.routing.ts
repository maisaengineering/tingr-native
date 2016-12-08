import { LoginComponent } from "./pages/login/login.component";
import { VerifyPasswordComponent } from "./pages/verify-password/password.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "verify-password", component: VerifyPasswordComponent },
    { path: "home", component: HomeComponent }
];

export const navigatableComponents = [
    LoginComponent,
    VerifyPasswordComponent,
    HomeComponent
];