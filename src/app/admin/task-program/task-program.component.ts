import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddTask } from 'src/app/models/addtask';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Category, MIMEType, ToolType, Lider, Paths } from 'src/app/services/constant';
import { SharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-task-program',
  templateUrl: './task-program.component.html',
  styleUrls: ['./task-program.component.scss'],
})
export class TaskProgramComponent implements OnInit {
  alert: boolean = false;
  task: any;
  taskId = 0;

  toolTypeList: any = [];
  @ViewChild('ttypes') ttypes!: QueryList<ElementRef>;

  liderList: any = [];
  @ViewChild('liders') liders!: QueryList<ElementRef>;

  appUserRoleList: any = [
    { id: '1', roleName: 'SETUP_ROLE' },
    { id: '2', roleName: 'ENTRY_ROLE' },
    { id: '3', roleName: 'SEATPLAN_ROLE' },
    { id: '4', roleName: 'MARKSENTRY_ROLE' },
    { id: '5', roleName: 'APPLICANT_ROLE' },
  ];

  employee: any;
  taskForm: FormGroup | any;
  submitted = false;
  getDropdown: any;
  getDepartment: any;
  getToolType: any;
  getLider: any;
  courselist: any;
  checkboxs: any;
  addTask: any;
  _student: any;
  isToolChecked = false;

  public sendinvite: string | undefined;
  displayVal: string = '';
  selCat: any;
  selType: any;
  selToolType = [];
  selLidar: any;
  selTraining: any;
  clientContacts = new Array();
  isUpdate: Boolean = false;
  userForm: any;
  filesToBeUploaded: FormData | undefined = undefined;





  getValue(val: string) {
    console.warn(val);
    this.displayVal = val;
  }
  selectedDay: string = '';

  days: any = ['Yes', 'No'];

  radioChangeHandler(event: any) {
    this.selectedDay = event.target.value;
  }

  constructor(
    // private toastr: ToastrService,
    public dialogRef: MatDialogRef<TaskProgramComponent>,
    private formBuilder: FormBuilder,

    public shareService: SharedService,
    private api: CommonApiService,
    private sharedService: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {
  }

  copyInputMessage(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    // alert("Copied.......")
    this.sharedService.showToast("Copied......");
  }

  ngOnInit(): void {
    this.initTaskForm();
    if(this.data.edit){
      this.getTask(this.data.id);
    }
    this.GetBaseKeys();
    this.GetBaseKeyValues();
    this.formControlValueChanged();
  }

  initTaskForm(): void {
    this.taskForm = this.formBuilder.group({
      id: 0,
      createdBy: this.shareService.getLoggedInUser(),
      createdOn: new Date().toISOString(),
      updatedBy: this.shareService.getLoggedInUser(),
      updatedOn: new Date().toISOString(),
      activeInd: true,
      resultStatus: 0,
      action: 0,
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [0, Validators.required],
      taskType: [0, Validators.required],
      areaType: 0,
      isTraining: [true],
      userType: [1, Validators.required],
      rating: 0,
      taskDuration: ['', Validators.required],
      traningDuration: ['', Validators.required],
      customerId: 0,
      programId: this.data.id,
      toolTypes: this.formBuilder.array([]),
      lidars: this.formBuilder.array([]),
      uploads: this.formBuilder.array([]),
    });
  }

  formControlValueChanged() {
    
    const phoneControl = this.taskForm.get('traningDuration');
    this.taskForm.get('isTraining').valueChanges.subscribe(
        (mode: boolean) => {
            console.log(mode);
            if (mode === true) {
                phoneControl.setValidators([Validators.required]);
            }
            else if (mode === false) {
                phoneControl.clearValidators();
            }
            phoneControl.updateValueAndValidity();
        });

}
 

  onChangeTType(id: any, isChecked: any) {
    if (isChecked.target.checked) {
      this.toolTypeList.push(id);
    } else {
      let index = this.toolTypeList.indexOf(id);
      this.toolTypeList.splice(index, 1);
    }
  }

  selectFiles(event: any) {
    const files = event.target.files;
    const formData = new FormData();
    for (let file of files) {
      formData.append('Files', file);
    };
    // formData.append('Files', files);
    formData.append('TaskFileName', '');
    formData.append('TaskFileBlobUrl', '');
    formData.append('Id', "0");
    formData.append('CreatedBy', this.shareService.getLoggedInUser());
    formData.append('CreatedOn', new Date().toISOString());
    formData.append('UpdatedBy', this.shareService.getLoggedInUser());
    formData.append('UpdatedOn', new Date().toISOString());
    formData.append('ActiveInd', "true");
    formData.append('ResultStatus', '0');
    formData.append('Action', '0');
    setTimeout(() => {
      this.filesToBeUploaded = formData;
    }, 100)
  }

  uploadTaskFiles(id: number) {
    if (this.filesToBeUploaded) {
      this.filesToBeUploaded.append('TaskId', id.toString());
      this.api.uploadTaskFiles(Paths.AddTaskUploadData, this.filesToBeUploaded).subscribe((res) => {
        console.log(res);
      });
    }
  }

  onChangeLider(id: any, isChecked: any) {
    if (isChecked.target.checked) {
      this.liderList.push(id);
    } else {
      let index = this.liderList.indexOf(id);
      this.liderList.splice(index, 1);
    }
  }

  checkedEvnt() {
    this.ttypes.forEach((element) => {
      element.nativeElement.checked = false;
      this.toolTypeList.length = 0;
    });

    this.liders.forEach((element) => {
      element.nativeElement.checked = false;
      this.liderList.length = 0;
    });
  }

  GetBaseKeys() {
    this.api.getData(Paths.GetBaseKeys).subscribe((response) => {
    });
  }

  GetBaseKeyValues() {
    this.api.getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Category}`).subscribe((res) => {
      this.getDropdown = res;
    });

    this.api.getData(`${Paths.GetBaseKeyValues}?baseKeyId=${MIMEType}`).subscribe((res) => {
      this.getDepartment = res;
    });

    this.api.getData(`${Paths.GetBaseKeyValues}?baseKeyId=${ToolType}`).subscribe((res) => {
      this.getToolType = res;
    });

    this.api.getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Lider}`).subscribe((res) => {
      this.getLider = res;
    });
  }

  getTask(id: any) {
    this.api.getData(`${Paths.GetTask}?taskId=${id}`).subscribe((data: any) => {
      //  this.setTask();
      if (data && data.result) {
        const { result }: any = data;
        console.log(result);
        this.taskId = result.id;
        this.taskForm.patchValue({ ...result });
      }
    })
  }


  updateTask() {
    if (this.taskForm.valid) {
      this.api.updateData(Paths.UpdateTask, this.taskForm.value).subscribe((data) => {
        console.log(data);
      });
    }
    this.isUpdate = false;
  }


  // convenience getter for easy access to form fields
  get f() {
    return this.taskForm.controls;
  }

  onSubmit(taskForm: FormGroup) {
    this.submitted = true;
    if (this.taskForm.invalid) {
      return;
    }
    if (this.data.edit) {
      this.updateTask();    // updateTask Form
      // this.sharedService.showToast("Task Updated Successfully !");
    }
    else {
      this.creatTask(); //Create TaskForm
      this.sharedService.showToast("Task Created Successfully !");
    }
    this.submitted = true;
    this.dialogRef.close();
  }

  uploadtask() {
    this.router.navigate(['/lane-alignment-mixed/' + this.data.id], {
      state: {
        id: this.taskId
      }
    });
    // this.dialogRef.close();
  }

  creatTask() {
    for (const item of this.toolTypeList) {
      this.taskForm.value.toolType.push({
        id: 0,
        createdBy: localStorage.getItem('LoggedInPersonId')?.toString(),
        createdOn: new Date().toISOString(),
        updatedBy: localStorage.getItem('LoggedInPersonId')?.toString(),
        updatedOn: new Date().toISOString(),
        activeInd: true,
        resultStatus: 0,
        action: 0,
        taskId: 0,
        tool: item,
      });
    }
    for (const item of this.liderList) {
      this.taskForm.value.lidars.push({
        id: 0,
        createdBy: localStorage.getItem('LoggedInPersonId')?.toString(),
        createdOn: new Date().toISOString(),
        updatedBy: localStorage.getItem('LoggedInPersonId')?.toString(),
        updatedOn: new Date().toISOString(),
        activeInd: true,
        resultStatus: 0,
        action: 0,
        taskId: 0,
        lidarType: item,
      });
    }

    this.api.postData(Paths.AddTask, this.taskForm.value).subscribe((res: any) => {
      let body = [
        {
          id: 0,
          createdBy: localStorage.getItem('LoggedInPersonId')?.toString(),
          createdOn: new Date().toISOString(),
          updatedBy: localStorage.getItem('LoggedInPersonId')?.toString(),
          updatedOn: new Date().toISOString(),
          activeInd: true,
          resultStatus: 0,
          action: 0,
          taskAssigned: parseInt(localStorage.getItem('LoggedInUser') as any),
          taskId: res.result.id,
          taskAssignedTo: 2,
          programId: this.data.id,
          statusId: 0,
        }
      ];
      if (this.filesToBeUploaded) {
        this.uploadTaskFiles(res.result.id);
      }
      // this.api
      //   .postData(Paths.AddAssignTask, body)
      //   .subscribe((res) => console.log('Add Asing task', res));
    });
  }

  onReset() {
    this.submitted = false;
    this.taskForm.reset();
    this.dialogRef.close();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onchanges() {
    console.log(this.checkboxs);
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
function ViewChildren(arg0: string) {
  throw new Error('Function not implemented.');
}

function subscribe(arg0: { next: (res: any) => void; error: () => void; }) {
  throw new Error('Function not implemented.');
}
