import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  register() {
    // Create an object with user details
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    // Store user details in SessionStorage
    sessionStorage.setItem('user', JSON.stringify(user));

    // Optionally, you can redirect the user to another page after registration
  }
}
