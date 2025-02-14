import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [CommonModule, RouterModule]
})
export class MainComponent {
  activeTab: string = 'workouts';
  workouts: any[] = [];
  diets: any[] = [];
  completedWorkouts = 0;
  totalWorkouts = 3;
  completedDiets = 0;
  totalDiets = 3;
  workoutProgress = 0;
  dietProgress = 0;

  constructor(private router: Router) {
    this.loadData();
  }

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  loadData() {
    // Example data for workouts
    this.workouts = [
      { id: 1, name: 'Chest Training', duration: '8-12', completed: true, progress: 100, locked: false, difficulty: 4, image: 'chest.png' },
      { id: 2, name: 'Legs Training', duration: '12-15', completed: false, progress: 20, locked: false, difficulty: 5, image: 'legs.png' },
      { id: 3, name: 'Cardio', duration: '20-25', completed: false, locked: true, difficulty: 3, image: 'cardio.png' }
    ];

    // Example data for diets
    this.diets = [
      { id: 1, name: 'Porridge', duration: '10', completed: true, image: 'porige.png' },
      { id: 2, name: 'Chicken', duration: '25', completed: true, image: 'chicken.png' },
      { id: 3, name: 'Broccoli Salad', duration: '5', completed: false, image: 'salad.png' },
    ];

    // Calculate progress
    this.completedWorkouts = this.workouts.filter(w => w.completed).length;
    this.completedDiets = this.diets.filter(d => d.completed).length;
    this.workoutProgress = (this.completedWorkouts / this.totalWorkouts) * 100;
    this.dietProgress = (this.completedDiets / this.totalDiets) * 100;
  }
}
