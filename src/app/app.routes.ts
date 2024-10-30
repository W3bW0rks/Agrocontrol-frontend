import { Routes } from '@angular/router';


import { RegisterPageComponent } from './profile-management/pages/register-page/register-page.component';
import { LoginPageComponent } from './profile-management/pages/login-page/login-page.component';
import {isNotAuthenticatedGuard} from "./profile-management/guards/is-not-authenticated-guard.guard";
import {isAuthenticatedGuard} from "./profile-management/guards/is-authenticated-guard.guard";
import {
  IrrigationSchedulerComponent
} from './agricultural-process/pages/irrigation-scheduler/irrigation-scheduler.component';
import {
  CropTreatmentSchedulerComponent
} from './agricultural-process/pages/crop-treatment-scheduler/crop-treatment-scheduler.component';
import {
  SeedingRegistrationComponent
} from './agricultural-process/pages/seeding-registration/seeding-registration.component';
import { LoginFormComponent } from './profile-management/components/login-form/login-form.component';
import {
  HomeAgriculturalProcessComponent
} from "./public/pages/home-agricultural-process/home-agricultural-process.component";
import {HomeViewComponent} from "./agricultural-process/pages/home-view/home-view.component";
import {FieldsViewComponent} from "./fields/pages/fields-view/fields-view.component";
import {WorkerManagementComponent} from "./fields/pages/worker-management/worker-management.component";
import {
  CropTreatmentViewComponent
} from "./agricultural-process/pages/crop-treatment-view/crop-treatment-view.component";
import {FinanceViewComponent} from "./agricultural-process/pages/finance-view/finance-view.component";
import {IrrigationHistoryComponent} from "./agricultural-process/pages/irrigation-history/irrigation-history.component";
import {
  SubscriptionSelectionComponent
} from "./subscriptions/pages/subscription-selection/subscription-selection.component";
import {ProductsInventoryComponent} from "./store/pages/products-inventory/products-inventory.component";

export const routes: Routes = [
  { path: 'register', component: RegisterPageComponent, canActivate: [ isNotAuthenticatedGuard ] },
  { path: 'login', component: LoginPageComponent, canActivate: [ isNotAuthenticatedGuard ], },

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'subscription-selection',
    component: SubscriptionSelectionComponent,
  },
  {
    path: 'field',
    component: FieldsViewComponent,
    canActivate: [isAuthenticatedGuard],
    data: { roles: ['ROLE_AGRICULTURAL_PRODUCER'] },
  },

  // Rutas protegidas para ROLE_AGRICULTURAL_PRODUCER
  {
    path: '',
    component: HomeAgriculturalProcessComponent,
    canActivate: [isAuthenticatedGuard],
    data: { roles: ['ROLE_AGRICULTURAL_PRODUCER'] },
    children: [
      {
        path: 'home-agricultural-process/:id',
        component: HomeViewComponent,
      },
      {
        path: 'worker-management',
        component: WorkerManagementComponent,
      },
      {
        path: 'irrigation-scheduler',
        component: IrrigationSchedulerComponent,
        data: { name: 'irrigation-scheduler' },
      },
      {
        path: 'irrigation-history',
        component: IrrigationHistoryComponent,
      },
      {
        path: 'seeding-registration',
        component: SeedingRegistrationComponent,
        data: { name: 'seeding-registration' },
      },
      {
        path: 'crop-treatment-view',
        component: CropTreatmentViewComponent,
        data: { name: 'crop-treatment-view' },
      },
      {
        path: 'crop-treatment-scheduler',
        component: CropTreatmentSchedulerComponent,
        data: { name: 'crop-treatment-scheduler' },
      },
      {
        path: 'products-inventory',
        component: ProductsInventoryComponent,
      },
    ]
  }
];
