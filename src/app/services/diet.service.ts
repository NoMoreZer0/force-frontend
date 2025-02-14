import { Injectable } from '@angular/core';
import { Diet } from '../models/diet.model';

@Injectable({
  providedIn: 'root'
})
export class DietService {
  private diets: Diet[] = [
    {
      id: 1,
      name: 'Broccoli Salad',
      duration: 5,
      image: 'brocoli-salad.png',
      completed: false,
      likes: 7806,
      comments: 103,
      saved: false,
      ingredients: [
        { name: 'Red Onion', quantity: '1, sliced' },
        { name: 'Lime', quantity: '1, juiced' },
        { name: 'Sunflower Oil', quantity: '1 tbsp' },
        { name: 'Beef Mince', quantity: '400g' },
        { name: 'Taco Seasoning', quantity: '½ pack' },
        { name: 'Tomato Purée', quantity: '1 tbsp' },
        { name: 'Black Beans', quantity: '400g, drained' }
      ],
      recipe: `Mix the red onion with half the lime juice and a pinch of salt in a small bowl, then set aside. 
               Stir with a wooden spoon so the mince browns and caramelizes. If too dry, drizzle more oil. 
               When the mince is well toasted, sprinkle taco seasoning, cook for 2 minutes, and add tomato purée.`
    }
  ];

  getDietById(id: number): Diet | undefined {
    return this.diets.find(d => d.id === id);
  }
}
