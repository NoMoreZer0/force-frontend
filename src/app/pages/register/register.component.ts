import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  termsAccepted = false;
  registeredUsers: any[] = [];

  constructor(private router: Router) {
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }

  // Password match validation
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  registerUser() {
    if (!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword) {
      alert('All fields are required!');
      return;
    }

    if (this.password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (!this.termsAccepted) {
      alert('You must accept the Privacy Policy and Terms of Use.');
      return;
    }

    // Save user
    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      gender: null,
      age: null,
      weight: null,
      height: null,
      goal: null,
      level: null,
      confirmationPage: false,
    };

    this.registeredUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers)); 

    this.router.navigate(['/login']); // Redirect to login
  }

  goBack() {
    this.router.navigate(['/']); // Navigate to home or previous page
  }
}
