import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/core/sign_in/sign_in.service';
import { AuthHelperService } from 'src/app/shared/auth-helper.service';
import { BaseComponent } from 'src/app/shared/base-component';
import { SelectOption } from 'src/app/shared/controls/input/select/select-option';
import { TableColumn } from 'src/app/shared/controls/output/table/table.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private signInService: SignInService,
    private authHelperService: AuthHelperService,
    private router: Router
  ) {
    super();
  }

  public carsColumns:TableColumn[] = [
    {
      name:'Tesla',
      dataKey:'manufacturer',
    },
    {
      name:'Tesla 2',
      dataKey:'model',
    },
    {
      name:'Tesla t',
      dataKey:'powerSupply',
    }
  ];
  public carsRows: any[] = [
    {
      manufacturer: 'Tesla',
      model: 'Model 3',
      powerSupply: 'electricity',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '7676',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
  ];

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
    console.log(this.form.value);
    // this.signInService.execute(this.form.value);
  }

  items:SelectOption[]=[
    {
      id:'1',
      name:'one'
    },
    {
      id:'2',
      name:'two'
    },
    {
      id:'3',
      name:'three'
    }
  ]

  sortData(val) {
    console.log(val);
  }

}
