export class AddTask {
    id?: number;
    createdBy?: string;
    createdOn?: string;
    updatedBy?: string;
    updatedOn?: string;
    activeInd?: boolean;
    resultStatus?: number;
    action?: number;
    title?: string;
    description?: string;
    category?: number;
    taskType?: number;
    areaType?: number;
    taskToolTypeId?: number;
    taskLidarTypeId?: number;
    isTraining?: boolean;
    userType?: number;
    rating?: number;
    taskUploadDataId?: number;
    taskDuration?: string;
    traningDuration?: string;

    toolTypes?: Array<{
        createdBy?: string;
        createdOn?: string;
        updatedBy?: string;
        updatedOn?: string;
        activeInd?: boolean;
        resultStatus?: number;
        action?: number;
        tool?: number;
        taskId?: number;
         }> = [];

    lidars?: Array<{
        createdBy?: string;
        createdOn?: string;
        updatedBy?: string;
        updatedOn?: string;
        activeInd?: number;
        resultStatus?: number;
        action?: number;
        lidarType?: number;
        taskId?: number;
        }> = [];

    uploads?: Array<{
        createdBy?: string;
        createdOn?: string;
        updatedBy?: string;
        updatedOn?: string;
        activeInd?: number;
        resultStatus?: number;
        action?: number;
        taskFileName?: string;
        taskFileBlobUrl?: string;
        taskId?: number;
        files?: string;
        }> = [];

}
