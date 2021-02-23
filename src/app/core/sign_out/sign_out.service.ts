import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { BaseApiService } from 'src/app/shared/base-api.service';
import { AuthHelperService } from 'src/app/shared/auth-helper.service';
import { State } from 'src/app/shared/state';

@Injectable({
  providedIn: 'root'
})
export class SignOutService extends BaseApiService {

  constructor(http: HttpClient, authService: AuthHelperService) {
    super(http, authService);
  }

  private readonly _signOut = new BehaviorSubject<State<void>>(new State<void>(null));
  readonly signOut$ = this._signOut.asObservable();

  execute(accessToken:string,refreshToken:string) {
    const response = new State<void>(this._signOut);
    response.notifyLoading();
    super.put<void>('users/signOut', {accessToken,refreshToken},true).subscribe((res:void) => {
      response.notifySuccess(res);
    }, err => {
      response.notifyError('Failed');
    });
  }

}
