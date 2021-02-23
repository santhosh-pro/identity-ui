import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignOutService } from 'src/app/core/sign_out/sign_out.service';
import { AuthHelperService } from 'src/app/shared/auth-helper.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public signOutService: SignOutService,
    private authHelperService: AuthHelperService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signOut() {
    this.signOutService.execute(this.authHelperService.getAccessToken(), this.authHelperService.getRefreshToken());
    this.authHelperService.removePreference();
    this.router.navigate(['login']);

  }
}
