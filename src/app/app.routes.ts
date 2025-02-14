import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SelectGenderComponent } from './pages/select-gender/select-gender.component';
import { SelectAgeComponent } from './pages/select-age/select-age.component';
import { SelectWeightComponent } from './pages/select-weight/select-weight.component';
import { SelectHeightComponent } from './pages/select-height/select-height.component';
import { SelectGoalComponent } from './pages/select-goal/select-goal.component';
import { SelectLevelComponent } from './pages/select-level/select-level.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './guards/app.guard';
import { WorkoutDetailComponent } from './pages/workout-detail/workout-detail.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'select-gender', component: SelectGenderComponent },
  { path: 'select-age', component: SelectAgeComponent },
  { path: 'select-weight', component: SelectWeightComponent },
  { path: 'select-height', component: SelectHeightComponent },
  { path: 'select-goal', component: SelectGoalComponent },
  { path: 'select-level', component: SelectLevelComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'workout/:id', component: WorkoutDetailComponent },
  { path: '**', redirectTo: 'register' }
];
