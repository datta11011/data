import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonApiService } from 'src/app/services/common-api.service';
import { SharedService } from 'src/app/services/sharedService.service';
import { Paths } from 'src/app/services/constant';
import { UploadTask } from '../../models/uploadtask';
import { ActivatedRoute } from '@angular/router'
import { MatDialog } from '@angular/material/dialog';
import { TaskProgramComponent } from '../task-program/task-program.component';

@Component({
  selector: 'app-lane-alignment-mixed',
  templateUrl: './lane-alignment-mixed.component.html',
  styleUrls: ['./lane-alignment-mixed.component.scss']
})
export class LaneAlignmentMixedComponent implements OnInit {

  taskDatas: any;
  trainingDatas: any;
  instructionDatas: any;
  fileData: any;
  uploadTasks: any;
  tId: any;

  cprogress: any;
  // files: FileHandle[] = [];

  constructor(
    private api: CommonApiService,
    private dialog: MatDialog,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private shareService: SharedService
  ) { }

  ngOnInit(): void {
    this.tId = this.route.snapshot.paramMap.get('taskId');
    this.getTask(this.tId);

    this.taskDatas = [];
    this.trainingDatas = [];
    this.instructionDatas = [];
  }

  get_extension(filename: any) {
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
  }

  /* UPLOAD TASK DATAS START */

  uploadTaskDatas(event: any, type: any) {

    var file: File;

    if (type == "file") {
      console.log('event', event)
      file = event;
      console.log('file1', file)
      if (event.length == 0) {
        console.log("No file selected!");
        return
      }

      this.fileData = <File>file;
      var mimeType = this.fileData;

      for (var i = 0; i < event.length; i++) {
        file = event[i].file;
        const fileCopy = file;
        setTimeout(() => {
          var reader = new FileReader();
          reader.readAsDataURL(<File>fileCopy);

          reader.onload = (_event) => {
            this.taskDatas.push({
              fileName: fileCopy.name,
              contentType: fileCopy.type,
              blobFile: fileCopy,
              previewFile: reader.result,
              fileSize: Math.round((fileCopy.size / 1024))
            })
          }
        }, 200);
      }

    } else {
      file = event.target.files;
      console.log('file2', file)
      if (event.target.files.length == 0) {
        console.log("No file selected!");
        return
      }

      this.fileData = <File>file;
      var mimeType = this.fileData;

      for (var i = 0; i < event.target.files.length; i++) {
        file = event.target.files[i];
        const fileCopy = file;
        setTimeout(() => {
          var reader = new FileReader();
          reader.readAsDataURL(<File>fileCopy);

          reader.onload = (_event) => {
            this.taskDatas.push({
              fileName: fileCopy.name,
              fileType: <File>fileCopy,
              blobFile: fileCopy,
              previewFile: reader.result,
              fileSize: Math.round((fileCopy.size / 1024))
            })
          }
        }, 200);
      }
    }

  }
  removeUploadedTaskDatas(elements: any, index: number) {
    this.taskDatas.splice(index, 1)
  }
  submitTaskDatas() {
    const formData = new FormData();
    formData.append('TaskFileName', '');
    formData.append('TaskFileBlobUrl', '');
    formData.append('Id', "0");
    formData.append('TaskId', this.tId);
    formData.append('CreatedBy', this.shareService.getLoggedInUser());
    formData.append('CreatedOn', new Date().toISOString());
    formData.append('UpdatedBy', this.shareService.getLoggedInUser());
    formData.append('UpdatedOn', new Date().toISOString());
    formData.append('ActiveInd', "true");
    formData.append('ResultStatus', '0');
    formData.append('Action', '0');
    for (let file of this.taskDatas) {
      formData.append('Files', file.blobFile);
    };
    this.api.uploadTaskFiles(Paths.AddTaskUploadData + `?type=${1}`, formData).subscribe((res: any) => {
      this.uploadTasks = res;
      this.sharedService.showToast("Upload Task Data Successfully!");
    })
  }
  cancelUploadedTaskDatas() {
    this.taskDatas = [];
  }

  /* UPLOAD TASK DATAS END */

  /* UPLOAD TRAINING DATAS START */

  uploadTrainingDatas(event: any, type: any) {

    var file: File;
    if (type == "file") {
      console.log('event', event)
      file = event;
      console.log('file1', file)
      if (event.length == 0) {
        console.log("No file selected!");
        return
      }

      this.fileData = <File>file;
      var mimeType = this.fileData;

      for (var i = 0; i < event.length; i++) {
        file = event[i].file;
        const fileCopy = file;
        setTimeout(() => {
          var reader = new FileReader();
          reader.readAsDataURL(<File>fileCopy);

          reader.onload = (_event) => {
            this.trainingDatas.push({
              fileName: fileCopy.name,
              fileType: <File>fileCopy,
              blobFile: fileCopy,
              previewFile: reader.result,
              fileSize: Math.round((fileCopy.size / 1024))
            })
          }
        }, 200);

      }

    } else {
      file = event.target.files;
      console.log('file2', file)
      if (event.target.files.length == 0) {
        console.log("No file selected!");
        return
      }

      this.fileData = <File>file;
      var mimeType = this.fileData;

      for (var i = 0; i < event.target.files.length; i++) {
        file = event.target.files[i];
        const fileCopy = file;
        setTimeout(() => {
          var reader = new FileReader();
          reader.readAsDataURL(<File>fileCopy);

          reader.onload = (_event) => {
            this.trainingDatas.push({
              fileName: fileCopy.name,
              fileType: <File>fileCopy,
              blobFile: fileCopy,
              previewFile: reader.result,
              fileSize: Math.round((fileCopy.size / 1024))
            })

          }
        }, 200);

      }
    }
  }

  cancelUploadedTrainingDatas() {
    this.trainingDatas = [];
  }

  removeUploadedTrainingDatas(elements: any, index: number) {
    this.trainingDatas.splice(index, 1)
  }

  submitTrainingDatas() {
    const trainformData = new FormData();
    trainformData.append('TaskFileName', '');
    trainformData.append('TaskFileBlobUrl', '');
    trainformData.append('Id', "0");
    trainformData.append('TaskId', this.tId);
    trainformData.append('CreatedBy', this.shareService.getLoggedInUser());
    trainformData.append('CreatedOn', new Date().toISOString());
    trainformData.append('UpdatedBy', this.shareService.getLoggedInUser());
    trainformData.append('UpdatedOn', new Date().toISOString());
    trainformData.append('ActiveInd', "true");
    trainformData.append('ResultStatus', '0');
    trainformData.append('Action', '0');
    for (let file of this.trainingDatas) {
      trainformData.append('Files', file.blobFile);
    };
    this.api.uploadTaskFiles(Paths.AddTaskUploadData + `?type=${2}`, trainformData).subscribe((res: any) => {
      this.uploadTasks = res;
      this.sharedService.showToast("Upload Task Training Data Successfully!");
    })
  }

  navigateBack() {
    const id = window.history.state.id;
    console.log(id);
    const dialogRef = this.dialog.open(TaskProgramComponent, {
      width: "30%",
      height: "100%",
      position: { right: '0' },
      data: {
        id: id || 0,
        edit: true,
        comingFromUpload: true,
      },
    });
  }

  /* UPLOAD TRAINING DATAS END */

  /* UPLOAD INSTRUCTIONS DATAS START */

  uploadInstructions(event: any, type: any) {

    var file: File;
    if (type == "file") {
      console.log('event', event)
      file = event;
      console.log('file1', file)
      if (event.length == 0) {
        console.log("No file selected!");
        return
      }

      this.fileData = <File>file;
      var mimeType = this.fileData;

      for (var i = 0; i < event.length; i++) {
        file = event[i].file;
        const fileCopy = file;
        setTimeout(() => {
          var reader = new FileReader();
          reader.readAsDataURL(<File>fileCopy);

          reader.onload = (_event) => {
            this.instructionDatas.push({
              fileName: fileCopy.name,
              fileType: <File>fileCopy,
              blobFile: fileCopy,
              previewFile: reader.result,
              fileSize: Math.round((fileCopy.size / 1024))
            })
          }
        }, 200);

      }

    } else {
      file = event.target.files;
      console.log('file2', file)
      if (event.target.files.length == 0) {
        console.log("No file selected!");
        return
      }

      this.fileData = <File>file;
      var mimeType = this.fileData;

      for (var i = 0; i < event.target.files.length; i++) {
        file = event.target.files[i];
        const fileCopy = file;
        setTimeout(() => {
          var reader = new FileReader();
          reader.readAsDataURL(<File>fileCopy);

          reader.onload = (_event) => {
            this.instructionDatas.push({
              fileName: fileCopy.name,
              fileType: <File>fileCopy,
              blobFile: fileCopy,
              previewFile: reader.result,
              fileSize: Math.round((fileCopy.size / 1024))
            })

          }
        }, 200);

      }
    }

  }

  cancelUploadedInstructions() {
    this.instructionDatas = [];
  }

  removeUploadedInstructions(elements: any, index: number) {
    this.instructionDatas.splice(index, 1)
  }

  submitInstructions() {
    const formData = new FormData();
    formData.append('TaskFileName', '');
    formData.append('TaskFileBlobUrl', '');
    formData.append('Id', "0");
    formData.append('TaskId', this.tId);
    formData.append('CreatedBy', this.shareService.getLoggedInUser());
    formData.append('CreatedOn', new Date().toISOString());
    formData.append('UpdatedBy', this.shareService.getLoggedInUser());
    formData.append('UpdatedOn', new Date().toISOString());
    formData.append('ActiveInd', "true");
    formData.append('ResultStatus', '0');
    formData.append('Action', '0');
    for (let file of this.instructionDatas) {
      formData.append('Files', file.blobFile);
    };
    this.api.uploadTaskFiles(Paths.AddTaskUploadData + `?type=${3}`, formData).subscribe((res: any) => {
      this.uploadTasks = res;
      this.sharedService.showToast("Upload Task Instructions Data Successfully!");
    })
  }
  /* UPLOAD INSTRUCTIONS DATAS END */


  getTask(id: any) {
    this.api.getData(`${Paths.GetTask}?taskId=${id}`).subscribe((data: any) => {
      data = data.result;
      console.log('getTask', data);
    })
  }

}
