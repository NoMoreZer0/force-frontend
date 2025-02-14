import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css'],
})
export class RestComponent {
  restTime: number = 60;
  workoutId!: number;
  nextExerciseIndex!: number;
  interval: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.workoutId = parseInt(this.route.snapshot.paramMap.get('workoutId')!);
    this.nextExerciseIndex = parseInt(this.route.snapshot.paramMap.get('index')!);
    this.startRestTimer();
  }

  startRestTimer() {
    this.interval = setInterval(() => {
      this.restTime--;
      if (this.restTime <= 0) {
        this.skipRest();
      }
    }, 1000);
  }

  stopTime() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
  
  toggleTimer() {
    if (this.interval) {
      this.stopTime();
    } else {
      this.startRestTimer();
    }
  }

  addTime() {
    this.restTime += 10;
  }

  skipRest() {
    clearInterval(this.interval);
    this.router.navigate(['/exercise-detail', this.workoutId, this.nextExerciseIndex]);
  }
}
