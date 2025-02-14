import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-age',
  standalone: true,
  templateUrl: './select-age.component.html',
  styleUrls: ['./select-age.component.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class SelectAgeComponent {
  selectedAge: number | null = null;
  registeredUsers: any[] = [];
  ageOptions: number[] = [];

  constructor(private router: Router) {
    // Load registered users
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }

    // Generate age options dynamically (10 to 99)
    this.ageOptions = Array.from({ length: 90 }, (_, i) => i + 10);
  }

  confirmAge() {
    if (!this.selectedAge) return;

    // Retrieve logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    // Update user age
    const userIndex = this.registeredUsers.findIndex(u => u.email === loggedInUser.email);
    if (userIndex !== -1) {
      this.registeredUsers[userIndex].age = this.selectedAge;
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

      // Update logged-in user data
      loggedInUser.age = this.selectedAge;
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

      if (!this.registeredUsers[userIndex].weight) {
        this.router.navigate(['select-weight'])
      }

      this.router.navigate(['/dashboard']); // Redirect to dashboard
    }
  }

  goBack() {
    this.router.navigate(['/select-gender']);
  }
}
