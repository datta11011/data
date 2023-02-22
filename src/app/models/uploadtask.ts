export class UploadTask {
    taskId?:number;
    taskFileName?: string;
    taskFileBlobUrl?: string;
    id?: number;
    createdBy?: string;
    createdOn?: string;
    updatedBy?: string;    
    updatedOn?: string;
    activeInd?: boolean;
    resultStatus?: number;
    action?: number;
    files?: Array<{
     }> = [];
}
