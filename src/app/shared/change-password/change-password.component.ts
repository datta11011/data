import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Paths } from 'src/app/services/constant';
import { SharedService } from 'src/app/services/sharedService.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {


  submitted = false;



  // changePswForm = new FormGroup({
  //   currentPassword: new FormControl('', Validators.required),
  //   newPassword: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', Validators.required)
  // },
  // {validators: passwordMatchValidator()}
  // );

  constructor(
    private api: CommonApiService,
    private sharedService: SharedService,
    private fb: FormBuilder,
    private router: Router
  ) { }


  changePswForm = this.fb.group({
    currentPassword: [
      null,
      [
        Validators.required
      ],
    ],
    newPassword: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8),
      ],
    ],
    confirmPassword: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8),
      ],
    ],
  },
    { validators: passwordMatchValidator() }
  )

  ngOnInit(): void {
  }

  get currentPassword() {
    return this.changePswForm.get('currentPassword');
  }

  get newPassword() {
    return this.changePswForm.get('newPassword');
  }

  get confirmPassword() {
    return this.changePswForm.get('confirmPassword');
  }

  submit(changePswForm: FormGroup) {
    this.submitted = true;
    console.log('changePswForm', changePswForm);
    if (!this.changePswForm.valid)
      return;
    this.api.postData(Paths.changePassword, this.changePswForm.value).subscribe((res: any) => {
      if (typeof res != 'undefined' && res) {
        this.router.navigate([`/custom-login`]);
        this.sharedService.showToast('Password Changed Successfully!');
      }
    })

  }

}
