import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CommonApiService } from '../../services/common-api.service';
import { Paths, roles } from './../../services/constant';
import { SharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.scss'],
})
export class CustomLoginComponent implements OnInit {
  public isLoggedIn: boolean | undefined;
  LoginFormGroup: any;
  submitted = false;
  showMessageStripe = false;
  errorMsg = "";
  email: any;

  constructor(
    public fb: FormBuilder,
    private auth: AuthService,
    public commonApi: CommonApiService,
    private router: Router,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
   this.email = localStorage.getItem("LogInEmail");
    this.createLogin();
  }

  createLogin() {
    this.LoginFormGroup = this.fb.group({
      email: [this.email == '' ? "" : this.email, Validators.required],
      password: ["", Validators.required],
    });
  }


  onFormSubmit(form: FormGroup) {
    this.showMessageStripe = false;
    if (form.valid) {
      let data = form.value;
      const { email, password } = this.LoginFormGroup.value;
      this.commonApi.postData(Paths.Login, { email, password }).subscribe((res: any) => {
        console.log('res', res);
        const { result }: any = res;
        if (result) {
          localStorage.setItem('authToken', JSON.stringify(result));
          this.commonApi.postData(`${Paths.GetLoginUser}?email=${email}`, {}).subscribe((userdata) => {
            console.log('userdata', userdata);
            const { result: details }: any = userdata;
            const { email, firstName, lastName, role, userId, id, isOnBoard }: any = details;
            this.auth.sendToken(
              email,
              userId,
              id,
              roles[role],
              role,
              `${firstName} ${lastName}`,
              ''
            );
            if(isOnBoard)
            {
              this.sharedService.showToast("Logged in Successfully");
              this.router.navigate([`/${roles[role]}`]);
              console.log(roles[role]);
            }
            else{
              this.router.navigate([`/change-password`]);
            }
           
          })
        } else {
          this.showMessageStripe = true;   // TODO; show a toast message
          this.errorMsg = "Please Enter Correct Email or Password.";
          // this.sharedService.showToast("Invalid login attempts");
        }
        const data = {
          userId: '1',
          personId: '1',
          role: 'Super',
          roleId: 30,
          name: 'Michael Korr',
          profileFileUrl: '',
        };
      });

    }
    else {
      this.showMessageStripe = true;
      this.errorMsg = "Username and Password can not be empty.";
    }
  }
}
