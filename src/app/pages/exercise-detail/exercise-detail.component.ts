import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workout, Exercise } from '../../models/workout.model';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css'],
})
export class ExerciseDetailComponent {
  workout!: Workout;
  currentExercise!: Exercise;
  exerciseIndex: number = 0;
  timer!: number;
  interval: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workoutService: WorkoutService
  ) {
    const workoutId = parseInt(this.route.snapshot.paramMap.get('workoutId')!);
    this.exerciseIndex = parseInt(this.route.snapshot.paramMap.get('index')!);

    this.workout = this.workoutService.getWorkoutById(workoutId);
    this.currentExercise = this.workout.exercises[this.exerciseIndex];

    if (this.currentExercise.duration) {
      this.startTimer(this.currentExercise.duration_sec!);
    }
  }

  startTimer(duration: number) {
    this.timer = duration;
    this.interval = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        this.nextExercise();
      }
    }, 1000);
  }

  nextExercise() {
    clearInterval(this.interval);
    if (this.exerciseIndex < this.workout.exercises.length - 1) {
      this.router.navigate(['/rest', this.workout.id, this.exerciseIndex + 1]);
    } else {
      this.router.navigate(['/main']);
    }
  }
}
