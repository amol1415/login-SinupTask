import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

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
