import { Response } from 'express';
import { QrCodeService } from '../qr-codes/qr-codes.service';
import { QrScanLogService } from '../qr-scan-logs/qr-scan-logs.service';
import { ValidateQrCodeQuery } from './dto/validate-qr-code-query.dto';
import { BulkDeleteQrCodeDto } from '../qr-codes/dto/update-qr-code.dto';
import { AnalyticsPublicDto } from 'src/qr-scan-logs/dto/analytics.dto';
import { CreateQrFolderPublicDto } from 'src/qr-folders/dto/create-qr-folder.dto';
import { QrFoldersService } from 'src/qr-folders/qr-folders.service';
import { PublicApiService } from './public-api.service';
import { QrImageFormatEnum } from 'src/enums/qr-image-format.enum';
import { GenerateQrDto } from './dto/generate-qr-image.dto';
import { BulkQrCodeDto } from './dto/bulk-qr-code.dto';
import { BulkEditQrCodeDto } from './dto/bulk-edit-qr-code.dto';
import { DuplicateQrCodeDto } from './dto/duplicate-qr-code.dto';
export declare class PublicApiController {
    private readonly publicApiService;
    private readonly qrCodeService;
    private readonly qrFolderService;
    private readonly qrScanLogService;
    constructor(publicApiService: PublicApiService, qrCodeService: QrCodeService, qrFolderService: QrFoldersService, qrScanLogService: QrScanLogService);
    getQrCodes(query: ValidateQrCodeQuery, userId: number, res: Response): Promise<Response<any, Record<string, any>>>;
    createQr(qrCodes: BulkQrCodeDto[], res: Response, userId: number): Promise<Response<any, Record<string, any>>>;
    BulkEdit(qrCodes: BulkEditQrCodeDto[], res: Response, userId: number): Promise<Response<any, Record<string, any>>>;
    updateQr(qrCode: BulkEditQrCodeDto, res: Response, userId: number): Promise<Response<any, Record<string, any>>>;
    deleteQr(dto: BulkDeleteQrCodeDto, res: Response): Promise<Response<any, Record<string, any>>>;
    DuplicateQr(dto: DuplicateQrCodeDto, userId: number): Promise<{
        id: number;
    }>;
    generateQrImage(format: QrImageFormatEnum, dto: GenerateQrDto, userId: number, res: Response): Promise<void>;
    getQrImage(format: QrImageFormatEnum, dto: DuplicateQrCodeDto, userId: number): Promise<import("../qr-codes/entities/qr-code.entity").QrCode>;
    getAnalytics(analyticsPublicDto: AnalyticsPublicDto, userId: number): Promise<any>;
    createFolder(createQrFolderPublicDto: CreateQrFolderPublicDto, res: Response, userId: number): Promise<Response<any, Record<string, any>>>;
    getAllFolders(res: Response, userId: number): Promise<Response<any, Record<string, any>>>;
    getQrCode(id: number, res: Response, userId: number): Promise<Response<any, Record<string, any>>>;
}
