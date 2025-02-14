export interface Exercise {
    name: string;
    duration?: string; // Format: "0:30" or "x10"
    image: string; // Path to the exercise illustration
  }
  
  export interface Workout {
    id: number;
    name: string;
    duration: string;
    saved: boolean;
    likes: number;
    comments: number;
    image: string; // Background image for workout
    exercises: Exercise[];
  }
  