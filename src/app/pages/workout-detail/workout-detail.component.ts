import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from '../../services/workout.service';
import { Workout } from '../../models/workout.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css'],
  imports: [CommonModule],
})
export class WorkoutDetailComponent implements OnInit {
  workout: Workout | undefined;

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService, private router: Router) {}

  ngOnInit(): void {
    const workoutId = Number(this.route.snapshot.paramMap.get('id'));
    this.workout = this.workoutService.getWorkoutById(workoutId);
  }

  startWorkout() {
    this.router.navigate(['/exercise-detail', this.workout?.id, 0]);
  }

  backClick() {
    this.router.navigate(['/main']);
  }
}
