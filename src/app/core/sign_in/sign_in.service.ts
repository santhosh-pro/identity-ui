import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SignInRequest } from './sign_in_request';
import { SignInResponse } from './sign_in_response';
import { BaseApiService } from 'src/app/shared/base-api.service';
import { AuthHelperService } from 'src/app/shared/auth-helper.service';
import { State } from 'src/app/shared/state';
@Injectable({
  providedIn: 'root'
})
export class SignInService extends BaseApiService {

  constructor(http: HttpClient, authService: AuthHelperService) {
    super(http, authService);
  }

  private readonly _signIn = new BehaviorSubject<State<SignInResponse>>(new State<SignInResponse>(null));
  readonly signIn$ = this._signIn.asObservable();

  execute(data:SignInRequest) {
    const response = new State<SignInResponse>(this._signIn);
    response.notifyLoading();
    super.post<SignInResponse>('users/signIn',data,true).subscribe((res:SignInResponse) => {
      response.notifySuccess(res);
    }, err => {
      response.notifyError('Failed');
    });
  }

}
