import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHelperService } from '../auth-helper.service';
import { BaseComponent } from '../base-component';
import { UserService } from '../user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService,
    private authHelperService:AuthHelperService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.createForm();

    super.autoUnSubscribe(
      this.userService.login$.subscribe((res) => {
        if (res.isSuccess) {
          this.authHelperService.storePreference(
            res.data.accessToken,
            res.data.refreshToken
          );
          this.router.navigate(['/page-1']);
        } else if (res.isError) {
          alert('error')
        }
      })
    );
  }

  createForm() {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  login() {
    this.userService.login(this.form.value);
  }

}
