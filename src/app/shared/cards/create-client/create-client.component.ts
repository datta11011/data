import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppSettingsService } from 'src/app/services/app.settings.service';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Department, Country, Paths } from 'src/app/services/constant';
import { SharedService } from 'src/app/services/sharedService.service';
@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss'],
})
export class CreateClientComponent implements OnInit {
  registerForm: any = FormGroup;
  AddContactForm!: FormGroup;
  submitted = false;
  csubmitted = false;
  getDropdown: any;
  getDepartment: any;
  selCustId: any = 0;
  selDepartment: any;
  clientContacts = new Array();
  clients = new Array();
  isUpdate: Boolean = false;
  clientnames = [];
  timer: any;
  totalRecordCount: number = 0;
  pageData: any;
  isPoNumberExist: boolean = false;
  selectedClientId: number = 0;
  selectedPoNumber: string = "";
  selectedLocationId: number = 0;
  selectClientContacts = new Array();
  hadPoNumberCreated: boolean = false;
  checkedContact: Array<number> = [];
  isEmailExists: boolean = false;
  isPhoneExists: boolean = false;
  isClientId: boolean = false; buttonDisabled: boolean;
  isClientCodeExists: boolean = false;
  workflowID: any = '0';


  @ViewChild('closebutton') closebutton: any;
  constructor(
    public dialogRef: MatDialogRef<CreateClientComponent>,
    public formBuilder: FormBuilder,
    private api: CommonApiService,
    private sharedService: SharedService,
    private apiCallService: AppSettingsService,
  ) { }

  ngOnInit(): void {
    this.getContacts();
    this.initRegisterForm();
    this.GetBaseKeys();
    this.GetBaseKeyValues();
    this.initAddContactForm();
    this.getClients();
    this.getAllContactsById();
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
  }

  GetBaseKeys() {
    this.api.getData(Paths.GetBaseKeys).subscribe((response) => {
      // console.log('basekeys', response);
    });
  }

  fetchClientNames(event: any) {
    const key: string | undefined = event?.target.value.trim();
    if (!key) {
      this.clientnames = [];
      return;
    }
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.api.getData(`${Paths.SearchClientName}?name=${key}`).subscribe((res) => {
        const { result }: any = res;
        if (result) {
          this.clientnames = result;
        }
      })
    }, 300);
  }


  handleLocationUpdate(event: any) {
    const value = event.value;
    this.selectedLocationId = parseInt(value);
    this.getAllContactsById();
  }

  selectCustomer(customer: any) {
    this.clientnames = [];
    this.selectedClientId = customer.id;
    this.registerForm.patchValue({
      customerName: customer.customerName,
      id: customer.id,
      code: customer.code
    });
    this.getAllContactsById();
  }

  GetBaseKeyValues() {
    this.api.getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Country}`).subscribe((res) => {
      this.getDropdown = res;
    });

    this.api.getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Department}`).subscribe((res) => {
      this.getDepartment = res;
    });
  }



  getClients(value: string = "") {
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
    this.pageData.search = value;
    this.api.postData(Paths.GetClients, this.pageData).subscribe((res: any) => {
      const { result, total }: any = res;
      this.clients = result;
      this.totalRecordCount = total || 0;
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  get e() {
    return this.AddContactForm.controls;
  }

  dailogClose() {
    this.dialogRef.close();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit(registerForm: FormGroup) {
    this.submitted = true;
    console.log('registerForm', registerForm);
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.get('id').value) {
      this.UpdateClient();
      this.buttonDisabled = true;
      this.sharedService.showToast("Client was Updated !");
    }
    else {
      this.AddClinet();
      this.buttonDisabled = true;
      this.sharedService.showToast("Client Added Successfully !");
    }
    if (this.clientContacts.length > 0) {
      this.AddContact();
      console.log("update client & add contacts happen");
    }
  }

  contactForm(AddContactForm: FormGroup) {
    this.csubmitted = true;
    if (this.AddContactForm.invalid) {
      return;
    }
  }

  getAllContactsById() {
    this.api.getData(`${Paths.GetAllContactsByClientId}?clientId=${this.selectedClientId}`).subscribe((res: any) => {
      if (res && res.result) {
        this.selectClientContacts = res.result;
        let clients = new Set([...this.checkedContact]);
        this.clientContacts = this.selectClientContacts.filter((el: any) => clients.has(el.id));
      }
    })
  }

  handleSelectionChange() {
    let clients = new Set([...this.checkedContact]);
    this.clientContacts = this.selectClientContacts.filter((el: any) => clients.has(el.id));
  }

  initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      id: 0,
      createdBy: localStorage.getItem('LoggedInPersonId'),
      createdOn: new Date().toISOString(),
      updatedBy: localStorage.getItem('LoggedInPersonId'),
      updatedOn: new Date().toISOString(),
      activeInd: true,
      resultStatus: 0,
      action: 0,
      customerName: ["", Validators.maxLength(15)], //replaced validators.required with validators.maxLength(15)
      imageUrl: "",
      code: ["", Validators.maxLength(2)],
      program: this.formBuilder.group({
        id: 0,
        createdBy: localStorage.getItem('LoggedInPersonId'),
        createdOn: new Date().toISOString(),
        updatedBy: localStorage.getItem('LoggedInPersonId'),
        updatedOn: new Date().toISOString(),
        activeInd: true,
        resultStatus: 0,
        action: 0,
        programName: '',
        poNumber: ["", [Validators.required], this.isPoNumberExist],
        customerId: [0, [Validators.required]],
        customerName: "",
        startdate: new Date().toISOString(),
        locationId: [0, Validators.required],
        locationName: '',
        enddate: new Date().toISOString(),
        programContactId: 0,
        contactSelection: "",
        poid: ''
      })
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
    // console.log('AddContactForm', this.AddContactForm);
  }

  isFormValidated(type: any) {
    const invalid = [];
    const controls = this.registerForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid.findIndex(el => el === type) !== -1;
  }


  validatepoNumber(event: any): void {
    const value: string = event.target.value;
    this.selectedPoNumber = value;
    if (!value) return;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.api.getData(`${Paths.ValidatePoNumber}?number=${value}&clientId=${this.selectedClientId}`).subscribe((res: any) => {
        this.isPoNumberExist = res.result.result;
        // this.getAllContactsById();
      })
    }, 400);
  }


  AddContact() {
    this.AddContactForm.get('programId')?.setValue(this.selCustId)
    if (this.AddContactForm.valid) {
      this.api.postData(Paths.AddContact, this.AddContactForm.value).subscribe((data: any) => {
        this.sharedService.showToast("Contact Added Successfully");
        this.closebutton.nativeElement.click();
        this.clientContacts.push(data.result);
        this.checkedContact.push(data.result.id);
        // this.AddContactForm.reset();
        // this.initAddContactForm();
        this.getAllContactsById();
        // this.getContacts(); //disabling it to not refresh the contact list on create
        this.AddContactForm.get('programId')?.setValue(this.selCustId);
      });
    }
  }

  UpdateContact() {
    if (this.AddContactForm.valid) {
      this.api.updateData(Paths.UpdateContact, this.AddContactForm.value).subscribe((data) => {
        this.getContacts();
        // this.AddContactForm.reset();
        this.initAddContactForm();
        this.closebutton.nativeElement.click();
        this.AddContactForm.get('programId')?.setValue(this.selCustId);
        this.sharedService.showToast("Contact Updated Successfully");
      })
    }
    this.isUpdate = false;
  }

  viewData(id: any) {
    this.isUpdate = true;
    this.clientContacts.map((item: any) => {
      if (item.id === id) {
        this.AddContactForm.get('id')?.setValue(item.id);
        this.AddContactForm.get('personName')?.setValue(item.personName);
        this.AddContactForm.get('email')?.setValue(item.email);
        this.AddContactForm.get('departmentName')?.setValue(item.departmentName);
        this.AddContactForm.get('phoneNumber')?.setValue(item.phoneNumber);
      }
    });
  }
  onDeleteContact(id: any) {
    this.api.deleteData(`${Paths.DeleteProgramContact}?ContactId=${id}`).subscribe(res => {
      console.log(res)
      this.getContacts();
    })
  }

  getContacts() {
    if (this.selCustId !== 0) {
      this.api.getData(`${Paths.GetAllContacts}?programId=${this.selCustId}`).subscribe((data: any) => {
        console.log(data.result);
        this.clientContacts = data.result;
      });
    }
  }

  AddClinet() {
    console.log('this.registerForm.value', this.registerForm.value);
    this.api.postData(Paths.AddClient, this.registerForm.value)
      .subscribe((data: any) => {
        this.selectedClientId = data.result['id'];
        this.selCustId = data.result.program['id'];
        this.api.getData(`${Paths.GetWorkFlowById}?id=${this.selCustId}`).subscribe((res: any)=>{
          console.log(res);
          this.workflowID = res.result.workflowId;
        });
        this.hadPoNumberCreated = !!data.result.program.ponumber;
      });
  }
  UpdateClient() {
    this.api.updateData(Paths.UpdateClient, this.registerForm.value).subscribe((res: any) => {
      if (res && res.result && res.result.program) {
        this.selCustId = res.result.program['id']
        this.hadPoNumberCreated = !!res.result.program.ponumber;
        this.AddContactForm.patchValue({
          programId: res.result.program.id
        })
      }
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
    this.registerForm.reset();
    this.dailogClose();
    // this.getClients();
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

  validateClientCode(event: any) {
    const value: string = event.target.value;
    this.api.getData(`${Paths.ValidateCustomerCode}?code=${value}`).subscribe((res: any) => {
      this.isClientCodeExists = res.result;
    })
  }
}
