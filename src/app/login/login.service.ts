import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthHelperService } from '../auth-helper.service';
import { BaseApiService } from '../base-api.service';
import { State } from '../state';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseApiService {

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
}
