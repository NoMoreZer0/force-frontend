import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-goal',
  standalone: true,
  templateUrl: './select-goal.component.html',
  styleUrls: ['./select-goal.component.css'],
  imports: [CommonModule, FormsModule]
})
export class SelectGoalComponent {
  selectedGoal: string | null = null;
  registeredUsers: any[] = [];

  constructor(private router: Router) {
    // Load registered users
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }

  selectGoal(goal: string) {
    this.selectedGoal = goal;
  }

  confirmGoal() {
    if (!this.selectedGoal) return;

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    const userIndex = this.registeredUsers.findIndex(u => u.email === loggedInUser.email);
    if (userIndex !== -1) {
      this.registeredUsers[userIndex].goal = this.selectedGoal;
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

      loggedInUser.goal = this.selectedGoal;
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

      if (!this.registeredUsers[userIndex].level) {
        this.router.navigate(['/select-level']);
      }

      alert('Goal selection saved!');
      this.router.navigate(['/dashboard']);
    }
  }

  goBack() {
    this.router.navigate(['/select-height']);
  }
}
