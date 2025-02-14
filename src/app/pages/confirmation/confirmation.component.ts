import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  imports: [CommonModule]
})
export class ConfirmationComponent {
  registeredUsers: any[] = [];

  constructor(private router: Router) {
    // Load registered users
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }

  confirm() {
    // Retrieve logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    // Update confirmation status
    const userIndex = this.registeredUsers.findIndex(u => u.email === loggedInUser.email);
    if (userIndex !== -1) {
      this.registeredUsers[userIndex].confirmationPage = true;
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

      loggedInUser.confirmationPage = true;
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

      alert('Your personal workout is ready!');
      this.router.navigate(['/main']);
    }
  }

  goBack() {
    this.router.navigate(['/select-level']);
  }
}
