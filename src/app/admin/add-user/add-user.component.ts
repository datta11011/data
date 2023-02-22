import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Country, Paths, Role } from 'src/app/services/constant';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SharedService } from 'src/app/services/sharedService.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm: any = FormGroup;
  submitted = false;
  Roles: any[] = [];
  Countries: any = [];
  clientContacts = new Array();
  isUpdate: Boolean = false;
  person: any;
  selId = 0;
  timer: any;
  isEmailExists: boolean = false;
  isPhoneExists: boolean = false;
  val: any[] = [];
  userOnboardDate: any;
  isPtgEmail: any;
  // rol:any;
  selectedCountryCode: string = "";

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddUserComponent>,
    private api: CommonApiService,
    private sharedService: SharedService,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.initUserForm();
    this.GetBaseKeys();
    this.GetBaseKeyValues();
    this.GetBaseKeyValuesmanager();
    if (this.data.edit) {
      this.getPerson(this.data.id);
    }
  }

  get f() {
    return this.userForm.controls;
  }

  GetBaseKeys() {
    this.api.getData(Paths.GetBaseKeys).subscribe((response) => { });
  }

  validateEmailPhone(event: any, type: number): void {
    const value: string = event.target.value;
    console.log('target value');
    if (!value) return;

    clearTimeout(this.timer);
    setTimeout(() => {
      this.api
        .getData(`${Paths.SearchByEmailId}?type=${type}&input=${value}`)
        .subscribe((res: any) => {
          if (type === 1) {
            this.isPhoneExists = res.result;
          } else if (type === 2) {
            this.isEmailExists = res.result;
          }
        });
    }, 400);
  }

  GetBaseKeyValues() {
    this.api
      .getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Role}`)
      .subscribe((res: any) => {
        const { result }: any = res;
        this.Roles = res.result;
        this.Roles = this.Roles.filter(
          (role) =>
            role.baseKeyValueName == 'Super Admin' ||
            role.baseKeyValueName == 'Manager'
        );
      });

    this.api
      .getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Country}`)
      .subscribe((res) => {
        const { result }: any = res;
        this.Countries = result;
      });
  }

  GetBaseKeyValuesmanager() {
    this.api
      .getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Role}`)
      .subscribe((res: any) => {
        const { result }: any = res;
        this.val = res.result;
        this.val = this.val.filter(
          (rol) =>
            rol.baseKeyValueName == 'Data Analyst' ||
            rol.baseKeyValueName == 'SME' ||
            rol.baseKeyValueName == 'QA' ||
            rol.baseKeyValueName == 'Crowd'
        );
      });

    this.api
      .getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Country}`)
      .subscribe((res) => {
        const { result }: any = res;
        this.Countries = result;
      });
  }

  initUserForm(): void {
    this.userForm = this.formBuilder.group({
      id: 0,
      createdBy: localStorage.getItem('LoggedInPersonId'),
      createdOn: new Date().toISOString(),
      updatedBy: localStorage.getItem('LoggedInPersonId'),
      updatedOn: new Date().toISOString(),
      activeInd: true,
      resultStatus: 0,
      action: 0,
      salutionId: 0,
      firstName: [
        '',
        [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')],
      ],
      middleName: '',
      lastName: [
        '',
        [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')],
      ],
      // phone1: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      phone1: [
        '',
        [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8), Validators.maxLength(10)],
      ],
      phone1TypeId: 0,
      phone2: '',
      phone2TypeId: 0,
      email1: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      email2: '',
      addressId: 0,
      datuserInd: true,
      imageUrl: '',
      fathersName: '',
      dateOfBirth: new Date().toISOString(),
      user: this.formBuilder.group({
        id: 0,
        createdBy: localStorage.getItem('LoggedInPersonId'),
        createdOn: new Date().toISOString(),
        updatedBy: localStorage.getItem('LoggedInPersonId'),
        updatedOn: new Date().toISOString(),
        activeInd: true,
        resultStatus: 0,
        action: 0,
        personId: 0,
        pwd: '',
        secretQns: '',
        secretKey: '',
        roleId: ['', Validators.required],
        rolename: '',
        onboardDate: null,
        IsEnable: 1,
        statusId: 37,
        email: '',
        firstName: '',
      }),
      address: this.formBuilder.group({
        id: 0,
        createdBy: localStorage.getItem('LoggedInPersonId'),
        createdOn: '2022-11-18T10:35:32.437Z',
        updatedBy: localStorage.getItem('LoggedInPersonId'),
        updatedOn: '2022-11-18T10:35:32.437Z',
        activeInd: true,
        resultStatus: 0,
        action: 0,
        line1: '',
        line2: '',
        line3: '',
        pincode: 0,
        stateId: 0,
        countryId: ['', Validators.required],
        countryName: '',
      }),
    });
  }

  AddPerson() {
    let setOnboardDate = this.userForm.controls['user'] as FormGroup;
    setOnboardDate.controls['onboardDate'].setValue(new Date().toISOString());
    this.api.postData(Paths.AddPerson, this.userForm.value).subscribe({
      next: (res) => {
        this.sharedService.showToast('User Added Successfully!');
        this.dialogRef.close('save');
        this.userForm.reset();
      },
      error: () => {
        this.sharedService.showToast('Error while adding the user');
      },
    });
  }

  UpdatePerson() {
    this.api
      .getData(`${Paths.GetPerson}?PersonId=${this.data.id}`)
      .subscribe((data: any) => {
        this.userOnboardDate = data.result.user.onboardDate;
        let setOnboardDate = this.userForm.controls['user'] as FormGroup;
        setOnboardDate.controls['onboardDate'].setValue(this.userOnboardDate);
        // console.log(this.userForm.value);
        if (this.userForm.valid) {
          this.api
            .updateData(Paths.UpdatePerson, this.userForm.value)
            .subscribe((data) => {
              this.sharedService.showToast('User Updated  Successfully!');
              this.dialogRef.close('update');
            });
        }
        this.isUpdate = false;
      });
  }

  getPerson(id: any) {
    this.api
      .getData(`${Paths.GetPerson}?PersonId=${id}`)
      .subscribe((data: any) => {
        this.person = data.result;
        this.selId = this.person.id;
        this.setData();
      });
  }

  setData() {
    this.userForm.get('firstName')?.setValue(this.person.firstName);
    this.userForm.get('lastName')?.setValue(this.person.lastName);
    this.userForm.get('phone1')?.setValue(this.person.phone1);
    this.userForm
      .get(['address', 'countryId'])
      ?.setValue(this.person.address.countryId);
    this.userForm.get(['user', 'roleId'])?.setValue(this.person.user.roleId);
    this.userForm.get('email1')?.setValue(this.person.email1);
    this.userForm.get('id')?.setValue(this.person.id);
    this.userForm.get(['user', 'id'])?.setValue(this.person.user.id);
    this.userForm.get(['address', 'id'])?.setValue(this.person.address.id);
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    if (this.data.edit) {
      //update Person
      this.UpdatePerson();
    } else {
      //Add Person
      this.AddPerson();
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }
  keyPressAlphaNumericWithCharacters(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    //  alpahbets, space, underscore
    if (/[a-zA-Z-_ ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  isPeopleTech(target: any) {
    this.isPtgEmail = !target.value.includes('@peopletech');
  }
}
