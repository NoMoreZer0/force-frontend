import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-level',
  standalone: true,
  templateUrl: './select-level.component.html',
  styleUrls: ['./select-level.component.css'],
  imports: [CommonModule, FormsModule]
})
export class SelectLevelComponent {
  selectedLevel: string | null = null;
  registeredUsers: any[] = [];

  constructor(private router: Router) {
    // Load registered users
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }

  selectLevel(level: string) {
    this.selectedLevel = level;
  }

  confirmLevel() {
    if (!this.selectedLevel) return;

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    const userIndex = this.registeredUsers.findIndex(u => u.email === loggedInUser.email);
    if (userIndex !== -1) {
      this.registeredUsers[userIndex].level = this.selectedLevel;
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

      loggedInUser.level = this.selectedLevel;
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

      if (!this.registeredUsers[userIndex].confirmationPage) {
        this.router.navigate(['/confirmation'])
      }

      alert('Level selection saved!');
      this.router.navigate(['/dashboard']);
    }
  }

  goBack() {
    this.router.navigate(['/select-goal']);
  }
}
