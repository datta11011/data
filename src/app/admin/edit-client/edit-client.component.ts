import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonApiService } from 'src/app/services/common-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department, Location, Paths } from 'src/app/services/constant';
import { SharedService } from 'src/app/services/sharedService.service';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  clientForm: any = FormGroup;
  AddContactForm!: FormGroup;
  getclient: any;
  submitted = false;
  csubmitted = false;
  getDropdown: any = [];
  getDepartment: any;
  clientContacts = new Array;
  programsByClient = new Array;
  allContactdList = new Array;
  isUpdate: Boolean = false;
  custName: any;
  selcustId: number = 0;
  isEmailExists: boolean = false;
  isPhoneExists: boolean = false;
  selectedClientId: number = 0;
  isClientId : boolean = false; 
  buttonDisabled: boolean;

  timer:any;
  constructor(
    public dialogRef: MatDialogRef<EditClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder,
    private sharedService: SharedService,
    private api: CommonApiService) {
    this.selcustId = data;
    
  }

  ngOnInit(): void {
    this.getClientData();
    // this.getContacts();
    this.initRegisterForm();
    this.GetBaseKeys();
    this.GetBaseKeyValues();
    this.initAddContactForm();
    this.GetProgramsByClientId();
    this.getAllContactsByClient();
  }

  getClientData() {
    this.api.getData(`${Paths.GetClient}?clientId=${this.selcustId}`).subscribe((res: any) => {
      if (res && res.result) {
        const { result }: any = res;
        this.clientForm.patchValue({ ...result });
        this.api.getData(`${Paths.GetAllContactsByClientId}?clientId=${this.selcustId}`).subscribe((data: any) => {
          this.allContactdList = data.result;
        });

        this.api.getData(`${Paths.GetProgramsByClientId}?CustomerId=${this.selcustId}`).subscribe((data: any) => {
          this.clientContacts = data.result;
        });
      }
    });
  }

  GetBaseKeys() {
    this.api.getData(Paths.GetBaseKeys).subscribe((response) => {
      // console.log('basekeys', response);
    });
  }

  GetBaseKeyValues() {
    this.api.getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Location}`).subscribe((res: any) => {
      if (res && res.result) {
        this.getDropdown = res.result;
      }
    });

    this.api.getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Department}`).subscribe((res) => {
      this.getDepartment = res;
    });
  }

  get f() {
    return this.clientForm.controls;
  }

  get e() {
    return this.AddContactForm.controls;
  }

  onSubmit(registerForm: FormGroup) {
    this.api.updateData(Paths.UpdateClient, this.clientForm.value).subscribe((res: any) => {
      console.log(res);
    })
    // this.submitted = true;
    // if (this.clientForm.invalid) {
    //   return;
    // }
    // this.AddClinet();
    // this.onNoClick()
  }

  contactForm(AddContactForm: FormGroup) {

  }

  initRegisterForm(): void {
    this.clientForm = this.formBuilder.group({
      id: 0,
      createdBy: localStorage.getItem('LoggedInPersonId'),
      createdOn: new Date().toISOString(),
      updatedBy: localStorage.getItem('LoggedInPersonId'),
      updatedOn: new Date().toISOString(),
      activeInd: true,
      resultStatus: 0,
      action: 0,
      customerName: '',
      imageUrl: '',
      countOfWorkflow: 0,
      countOfTask: 0,
      countOfCrowd: 0,
      countOfManaged: 0,
      program: null
    });
  }
  initAddContactForm(): void {
    this.AddContactForm = this.formBuilder.group({
      id: 0,
      createdBy: localStorage.getItem('LoggedInPersonId'),
      createdOn: new Date().toISOString(),
      updatedBy: localStorage.getItem('LoggedInPersonId'),
      updatedOn: new Date().toISOString(),
      activeInd: true,
      resultStatus: 0,
      action: 0,
      programId: 0,
      personId: 0,
      orgTypeId: 0,
      personName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      departmentName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  AddContact(data: any) {
    if (this.AddContactForm.valid) {
      this.api.postData(Paths.AddContact, this.AddContactForm.value).subscribe((data) => {
        this.getAllContactsByClient();
      });
    }
  }

  UpdateContact() {
    if (this.AddContactForm.valid) {
      // console.log(this.AddContactForm.value);
      this.api.updateData(Paths.UpdateContact, this.AddContactForm.value).subscribe((data) => {
        this.getAllContactsByClient();
        this.AddContactForm.reset();
        this.initAddContactForm();
        this.sharedService.showToast("Client Updated Successfully!");
      })
    }
    this.isUpdate = false;
  }

  viewData(id: any) {
    this.isUpdate = true;
    this.allContactdList.map((item: any) => {
      if (item.id === id) {
        this.AddContactForm.get('id')?.setValue(item.id);
        this.AddContactForm.get('personName')?.setValue(item.personName);
        this.AddContactForm.get('email')?.setValue(item.email);
        this.AddContactForm.get('departmentName')?.setValue(item.departmentName);
        this.AddContactForm.get('phoneNumber')?.setValue(item.phoneNumber);
        this.AddContactForm.get('programId')?.setValue(item.programId);
      }
    });
  }
  onDeleteContact(id: any) {
    this.api.deleteData(`${Paths.DeleteProgramContact}?ContactId=${id}`).subscribe(res => {
      this.GetProgramsByClientId();
    })
  }

  getAllContactsByClient() {
    this.api.getData(`${Paths.GetAllContactsByClientId}?clientId=${this.selcustId}`).subscribe((res: any) => {
      if (res && res.result) {
        this.allContactdList = res.result;
      }
    })
  }

  GetProgramsByClientId() {
    this.api.getData(`${Paths.GetProgramsByClientId}?CustomerId=${this.selcustId}`).subscribe((res: any) => {
      if (res && res.result) {
        this.programsByClient = res.result;
      }
    })
  }

  AddClinet() {
    this.api.updateData(Paths.UpdateClient, this.clientForm.value).subscribe((res: any) => {
      console.log(res);
    })
  }

  // for mobile number validations keypress event
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  // Only AlphaNumeric with Some Characters [-_ ]
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

  onReset() {
    this.submitted = false;
    this.clientForm.reset();
    this.dialogRef.close()
  }

  dailogClose() {
    this.dialogRef.close()
  }
  onNoClick() {
    this.dialogRef.close()
  }

  validateEmailPhone(event: any, type: number): void {
    const value: string = event.target.value;
    console.log("target value",);
    if (!value) return;
    clearTimeout(this.timer);
    setTimeout(() => {
      this.api.getData(`${Paths.ValidateProgramContactEmailPhone}?type=${type}&data=${value}&clientId=${this.selectedClientId}`).subscribe((res: any) => {
        if (type === 1) {
          this.isPhoneExists = res.result;
        } else if (type === 2) {
          this.isEmailExists = res.result;
        } else {
          this.isClientId = res.result;
        }
      })
    }, 400);
  }
  
}
