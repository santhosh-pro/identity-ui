import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationGuard } from './shared/authorization.guard';
import { AuthorizationService } from './shared/authorization.service';
import { JwtModule } from '@auth0/angular-jwt';
import { TokenInterceptor } from './shared/token.interceptor';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({config: {
      tokenGetter: getToken
    }}),
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    AuthorizationService,
    AuthorizationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getToken() {
  return localStorage.getItem('accessToken');
}
