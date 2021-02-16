import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHelperService } from '../auth-helper.service';
import { UserService } from '../user.service';

@Component({
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(
    public userService:UserService,
    private authHelperService:AuthHelperService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.userService.test();
  }

  logout() {
    this.userService.logout(this.authHelperService.getAccessToken(), this.authHelperService.getRefreshToken());
    this.authHelperService.removePreference();
    this.router.navigate(['login']);

  }

}
