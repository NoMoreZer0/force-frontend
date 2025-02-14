import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginComponent {
  email = '';
  password = '';
  registeredUsers: any[] = [];

  constructor(private router: Router) {
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }

  loginUser() {
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }

    const user = this.registeredUsers.find(u => u.email === this.email && u.password === this.password);

    if (user) {
      // Save logged-in user data
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      alert('Login successful!');
      
      if (!user.gender) {
        this.router.navigate(['/select-gender']);
      } else if (!user.age) {
        this.router.navigate(['/select-age']);
      } else if (!user.weight) {
        this.router.navigate(['/select-weight']);
      } else if (!user.height) {
        this.router.navigate(['/select-height']);
      } else if (!user.goal) {
        this.router.navigate(['/select-goal']);
      } else if (!user.level) {
        this.router.navigate(['/select-level']);
      } else if (!user.confirmationPage) {
        this.router.navigate(['/confirmation']);
      } else {
        this.router.navigate(['/main']);
      }
    } else {
      alert('Invalid email or password.');
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
