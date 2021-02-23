import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { AuthorizationGuard } from './shared/authorization.guard';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
