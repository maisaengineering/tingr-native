import { LoginComponent } from "./pages/login/login.component";
import { VerifyPasswordComponent } from "./pages/verify-password/password.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "verify-password", component: VerifyPasswordComponent },
    { path: "dashboard", component: DashboardComponent },
];

export const navigatableComponents = [
    LoginComponent,
    VerifyPasswordComponent,
    DashboardComponent
];