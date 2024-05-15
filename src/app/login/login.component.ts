import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {
    // Retrieve user details from sessionStorage if available
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // console.log(user);
      // this.username = user.username;
    }
  }



  login() {

    const storedUser = sessionStorage.getItem('user');


    if (storedUser) {
      const user = JSON.parse(storedUser);


      if (this.username === user.username && this.password === user.password) {
        //alert("Login Successful");
        // Example: Redirect to Dashboard
        this.router.navigate(['/dashboard']);
      } else {
        // Authentication failed, display error message
        this.error = 'Invalid username or password';
      }
    } else {
      // No user data found in sessionStorage
      this.error = 'User not registered';
    }
  }

}