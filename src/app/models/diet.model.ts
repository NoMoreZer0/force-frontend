export interface Diet {
    id: number;
    name: string;
    duration: number; // in minutes
    image: string;
    completed: boolean;
    likes: number;
    comments: number;
    saved: boolean;
    ingredients: { name: string; quantity: string }[]; // List of ingredients
    recipe: string; // Recipe description
  }
  