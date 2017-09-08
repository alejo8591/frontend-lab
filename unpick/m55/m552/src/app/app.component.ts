import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      user => this.user = user);
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
