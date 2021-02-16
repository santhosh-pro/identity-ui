import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHelperService } from '../auth-helper.service';
import { PageOneService } from './page-one.service';

@Component({
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(
    private pageOneService:PageOneService,
    private authHelperService:AuthHelperService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.pageOneService.test();
  }

  logout() {
    this.authHelperService.removePreference();
    this.router.navigate(['login']);
  }

}
