import { LoginComponent } from "./pages/login/login.component";
import { VerifyPasswordComponent } from "./pages/verify-password/password.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "verify-password", component: VerifyPasswordComponent },
];

export const navigatableComponents = [
    LoginComponent,
    VerifyPasswordComponent
];