import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-gender',
  standalone: true,
  templateUrl: './select-gender.component.html',
  styleUrls: ['./select-gender.component.css'],
})
export class SelectGenderComponent {
  selectedGender: string | null = null;
  registeredUsers: any[] = [];

  constructor(private router: Router) {
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }

  selectGender(gender: string) {
    this.selectedGender = gender;
  }

  confirmGender() {
    if (!this.selectedGender) return;

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    const userIndex = this.registeredUsers.findIndex(u => u.email === loggedInUser.email);
    if (userIndex !== -1) {
      this.registeredUsers[userIndex].gender = this.selectedGender;
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
      
      loggedInUser.gender = this.selectedGender;
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

      alert('Gender selection saved!');
      if (!loggedInUser.gender) {
        this.router.navigate(['/select-gender']);
      } else if (!loggedInUser.age) {
        this.router.navigate(['/select-age']);
      } else if (!loggedInUser.weight) {
        this.router.navigate(['/select-weight']);
      } else if (!loggedInUser.height) {
        this.router.navigate(['/select-height']);
      } else if (!loggedInUser.goal) {
        this.router.navigate(['/select-goal']);
      } else if (!loggedInUser.level) {
        this.router.navigate(['/select-level']);
      } else if (!loggedInUser.confirmationPage) {
        this.router.navigate(['/confirmation']);
      } else {
        this.router.navigate(['/main']);
      }
    }
  }
}
