import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-height',
  standalone: true,
  templateUrl: './select-height.component.html',
  styleUrls: ['./select-height.component.css'],
  imports: [CommonModule, FormsModule]
})
export class SelectHeightComponent {
  selectedHeight: number | null = null;
  registeredUsers: any[] = [];
  heightOptions: number[] = [];

  constructor(private router: Router) {
    // Load registered users
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }

    // Generate height options dynamically (100 cm to 250 cm)
    this.heightOptions = Array.from({ length: 151 }, (_, i) => i + 100);
  }

  confirmHeight() {
    if (!this.selectedHeight) return;

    // Retrieve logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    // Update user height
    const userIndex = this.registeredUsers.findIndex(u => u.email === loggedInUser.email);
    if (userIndex !== -1) {
      this.registeredUsers[userIndex].height = this.selectedHeight;
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

      // Update logged-in user data
      loggedInUser.height = this.selectedHeight;
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

      if (!this.registeredUsers[userIndex].goal) {
        this.router.navigate(['/select-goal']);
      }

      alert('Height selection saved!');
      this.router.navigate(['/dashboard']); // Redirect to dashboard
    }
  }

  goBack() {
    this.router.navigate(['/select-weight']);
  }
}
