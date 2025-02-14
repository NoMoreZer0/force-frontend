import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [
    {
      id: 1,
      name: 'Chest Training',
      duration: '8-12 min',
      saved: true,
      likes: 13259,
      comments: 289,
      image: 'assets/images/chest-training.jpg',
      exercises: [
        { name: 'Warm up', duration: '0:30', image: 'warmup.png' },
        { name: 'Pull ups with front support', duration: 'x10', image: 'chairups.png' },
        { name: 'Chair push-ups', duration: 'x15', image: 'chair-pull.png' },
        { name: 'Wide push ups', duration: 'x15', image: 'wide-push.png' }
      ]
    }
  ];

  getWorkoutById(id: number): Workout | undefined {
    return this.workouts.find(workout => workout.id === id);
  }
}
