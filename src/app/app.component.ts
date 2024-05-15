import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  // authService: any;

  isLoggedIn: boolean;

  constructor(private authService: AuthService) {
    // Assuming your AuthService has a method to check if the user is logged in
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
