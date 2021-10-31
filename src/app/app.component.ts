// app.component.ts

import { Component } from "@angular/core";
import {AsgardeoAuthService, AuthStateInterface, DecodedIDTokenPayload} from "@asgardeo/auth-angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  public isAuthenticated: boolean = false;
  public accessToken: String | undefined;
  public decodedIdToken: DecodedIDTokenPayload | undefined;
  constructor(private auth: AsgardeoAuthService) { }

  ngOnInit() {
    this.auth.state$
      .subscribe((state: AuthStateInterface) => {
        this.isAuthenticated = state.isAuthenticated;
      });
  }


  // Use this function in a login button to simply sign-in.
  handleSignIn(): void {
    console.log("Add login--");
    this.auth.signIn();
  }

  getAccessToken() {
    this.auth.getAccessToken().then((accessToken) => {
      console.log("Get Access Token--");
      this.accessToken = accessToken;
    });
  }

  getDecodedIdToken() {
    this.auth.getDecodedIDToken().then((decodedIdToken) => {
      console.log("Get ID token--");
      this.decodedIdToken = decodedIdToken;
    });
  }

  handleSignout() {
    this.auth.signOut();
  }
}
