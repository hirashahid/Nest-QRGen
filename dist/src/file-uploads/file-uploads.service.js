"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const file_upload_entity_1 = require("./entities/file-upload.entity");
const fs = require("fs");
const path = require("path");
const client_s3_1 = require("@aws-sdk/client-s3");
const process = require("node:process");
let FileUploadsService = class FileUploadsService {
    constructor(fileUploadRepository) {
        this.fileUploadRepository = fileUploadRepository;
        this.s3 = new client_s3_1.S3Client({
            region: process.env.AWS_DEFAULT_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });
        this.bucketName = process.env.AWS_BUCKET;
    }
    async create(file) {
        console.log(file);
        console.log(file.path);
        const uploadPath = 'uploads/files';
        const extname = path.extname(file.originalname);
        const basename = path.basename(file.originalname, extname);
        const uuid = new Date().getTime().toString(36);
        const uniqueFilename = `${basename}-${uuid}${extname}`;
        const localFilePath = path.join(uploadPath, uniqueFilename);
        console.log(localFilePath);
        fs.renameSync(file.path, localFilePath);
        const fileBuffer = fs.readFileSync(localFilePath);
        const s3Key = uploadPath + `/${uniqueFilename}`;
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucketName,
            Key: s3Key,
            Body: fileBuffer,
            ContentType: file.mimetype,
        });
        await this.s3.send(command);
        fs.unlinkSync(localFilePath);
        const fileUpload = new file_upload_entity_1.FileUpload();
        fileUpload.filename = file.originalname;
        fileUpload.path = localFilePath;
        fileUpload.mimetype = file.mimetype;
        fileUpload.size = file.size;
        await this.fileUploadRepository.save(fileUpload);
        return {
            filename: fileUpload.filename,
            path: fileUpload.path,
            mimetype: fileUpload.mimetype,
            size: fileUpload.size,
        };
    }
    async createByBuffer(file) {
        const s3Key = `uploads/files/${file.originalname}`;
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucketName,
            Key: s3Key,
            Body: file.buffer,
            ContentType: file.mimetype,
        });
        await this.s3.send(command);
        const s3Url = `https://${this.bucketName}.s3.${process.env.AWS_DEFAULT_REGION}.amazonaws.com/${s3Key}`;
        const fileUpload = this.fileUploadRepository.create({
            filename: file.originalname,
            path: s3Url,
            mimetype: file.mimetype,
            size: file.size,
        });
        await this.fileUploadRepository.save(fileUpload);
        return {
            id: fileUpload.id,
            url: s3Url,
            filename: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
        };
    }
    findAll() {
        return this.fileUploadRepository.find();
    }
    update(id, updateFileUploadDto) {
        return this.fileUploadRepository.update(id, updateFileUploadDto);
    }
    remove(id) {
        return this.fileUploadRepository.delete(id);
    }
};
exports.FileUploadsService = FileUploadsService;
exports.FileUploadsService = FileUploadsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_upload_entity_1.FileUpload)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FileUploadsService);
//# sourceMappingURL=file-uploads.service.js.map