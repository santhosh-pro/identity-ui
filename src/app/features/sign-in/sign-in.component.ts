import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/core/sign_in/sign_in.service';
import { AuthHelperService } from 'src/app/shared/auth-helper.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private signInService:SignInService,
    private authHelperService:AuthHelperService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.createForm();

    super.autoUnSubscribe(
      this.signInService.signIn$.subscribe((res) => {
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

  signIn() {
    this.signInService.execute(this.form.value);
  }

}
