import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-weight',
  standalone: true,
  templateUrl: './select-weight.component.html',
  styleUrls: ['./select-weight.component.css'],
  imports: [CommonModule, FormsModule]
})
export class SelectWeightComponent {
  selectedWeight: number = 70;
  registeredUsers: any[] = [];

  constructor(private router: Router) {
    // Load registered users
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }

  confirmWeight() {
    if (!this.selectedWeight) return;

    // Retrieve logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    // Update user weight
    const userIndex = this.registeredUsers.findIndex(u => u.email === loggedInUser.email);
    if (userIndex !== -1) {
      this.registeredUsers[userIndex].weight = this.selectedWeight;
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

      // Update logged-in user data
      loggedInUser.weight = this.selectedWeight;
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      
      if (!this.registeredUsers[userIndex].height) {
        this.router.navigate(['/select-height'])
      }

      alert('Weight selection saved!');
      this.router.navigate(['/dashboard']); // Redirect to dashboard
    }
  }

  goBack() {
    this.router.navigate(['/select-age']);
  }
}
