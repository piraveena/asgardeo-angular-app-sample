//app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AsgardeoAuthModule } from "@asgardeo/auth-angular";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AsgardeoAuthModule.forRoot({
      signInRedirectURL: "http://localhost:4200",
      signOutRedirectURL: "http://localhost:4200",
      clientID: "dummy_client_id",
      scope: ["openid", "email"],
      serverOrigin: "https://api.asgardeo.io/t/your_prod_here"
    })
  ],
  providers: [
    // Add your providers here.
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
