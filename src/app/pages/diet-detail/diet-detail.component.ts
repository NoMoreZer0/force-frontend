import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietService } from '../../services/diet.service';
import { Diet } from '../../models/diet.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diet-detail',
  templateUrl: './diet-detail.component.html',
  styleUrls: ['./diet-detail.component.scss'],
  imports: [ CommonModule ]
})
export class DietDetailComponent implements OnInit {
  diet: Diet | undefined;

  constructor(private route: ActivatedRoute, private dietService: DietService) {}

  ngOnInit(): void {
    const dietId = this.route.snapshot.paramMap.get('id');
    if (dietId) {
      this.diet = this.dietService.getDietById(parseInt(dietId, 10));
    }
  }
}
