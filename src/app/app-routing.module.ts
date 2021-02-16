import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './authorization.guard';
import { LoginComponent } from './login/login.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  { path: 'page-1', component:PageOneComponent, canActivate: [AuthorizationGuard]},
  { path: 'page-2', component:PageTwoComponent, canActivate: [AuthorizationGuard]},
  { path: 'login', component:LoginComponent},
  { path: '', redirectTo:'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
