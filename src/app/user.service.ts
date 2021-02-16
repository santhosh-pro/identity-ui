import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthHelperService } from './auth-helper.service';
import { BaseApiService } from './base-api.service';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService {

  constructor(http: HttpClient, authService: AuthHelperService) {
    super(http, authService);
  }

  private readonly _login = new BehaviorSubject<State<any>>(new State<any>(null));
  readonly login$ = this._login.asObservable();

  login(data: any) {
    const response = new State<any>(this._login);
    response.notifyLoading();
    return super.post<any>('users/signIn', data).subscribe(res => {
      response.notifySuccess(res);
    }, err => {
      response.notifyError(err);
    });
  }

  private readonly _test = new BehaviorSubject<State<any>>(new State<any>(null));
  readonly test$ = this._test.asObservable();

  test() {
    const response = new State<any>(this._test);
    response.notifyLoading();
    return super.post<any>('users/test', null).subscribe(res => {
      response.notifySuccess(res);
    }, err => {
      response.notifyError(err);
    });
  }

  private readonly _logout = new BehaviorSubject<State<any>>(new State<any>(null));
  readonly logout$ = this._test.asObservable();

  logout(accessToken:string,refreshToken:string) {
    const response = new State<any>(this._logout);
    response.notifyLoading();
    return super.put<any>('users/signOut', {accessToken,refreshToken}).subscribe(res => {
      response.notifySuccess(res);
    }, err => {
      response.notifyError(err);
    });
  }
  
}
