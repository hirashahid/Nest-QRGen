import { Repository } from 'typeorm';
import { FileUpload } from './entities/file-upload.entity';
import { CreateFileUploadDto } from './dto/create-file-upload.dto';
import { UpdateFileUploadDto } from './dto/update-file-upload.dto';
export declare class FileUploadsService {
    private readonly fileUploadRepository;
    private readonly s3;
    private readonly bucketName;
    constructor(fileUploadRepository: Repository<FileUpload>);
    create(file: Express.Multer.File): Promise<CreateFileUploadDto>;
    createByBuffer(file: Express.Multer.File): Promise<any>;
    findAll(): Promise<FileUpload[]>;
    update(id: number, updateFileUploadDto: UpdateFileUploadDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
