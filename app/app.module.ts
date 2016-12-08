import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";
import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { AuthData } from "./providers/data/oauth_data";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)

  ],
  declarations: [
    SIDEDRAWER_DIRECTIVES,
    AppComponent,
    ...navigatableComponents
  ],
  providers: [AuthData],
  bootstrap: [AppComponent]
})
export class AppModule {}