import { FileUploadsService } from './file-uploads.service';
import { CreateFileUploadDto } from './dto/create-file-upload.dto';
export declare class FileUploadsController {
    private readonly fileUploadsService;
    constructor(fileUploadsService: FileUploadsService);
    uploadFile(file: Express.Multer.File): Promise<CreateFileUploadDto>;
}
