import { Routes } from '@angular/router';

import {
  IrrigationSchedulerComponent
} from "./agricultural-process/pages/irrigation-scheduler/irrigation-scheduler.component";
import {
  CropTreatmentSchedulerComponent
} from "./agricultural-process/pages/crop-treatment-scheduler/crop-treatment-scheduler.component";
import {LoginFormComponent} from "./profile-management/components/login-form/login-form.component";

export const routes: Routes = [
  { path: 'irrigation-scheduler', component: IrrigationSchedulerComponent },
  { path: 'crop-treatment-scheduler', component: CropTreatmentSchedulerComponent },
  { path: 'login', component: LoginFormComponent }
];
