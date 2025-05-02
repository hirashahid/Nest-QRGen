import { GenerateQrDto } from './dto/generate-qr-image.dto';
import { FileUploadsService } from 'src/file-uploads/file-uploads.service';
import { QrCodeService } from 'src/qr-codes/qr-codes.service';
import { QrTypeService } from 'src/qr-types/qr-types.service';
import { QrImageFormatEnum } from 'src/enums/qr-image-format.enum';
import { QrFramesService } from 'src/qr-frames/qr-frames.service';
export declare class PublicApiService {
    private readonly fileUploadsService;
    private readonly qrCodeService;
    private readonly qrTypesService;
    private readonly qrFramesService;
    constructor(fileUploadsService: FileUploadsService, qrCodeService: QrCodeService, qrTypesService: QrTypeService, qrFramesService: QrFramesService);
    generateQrImage(dto: GenerateQrDto, format: string, userId: number): Promise<Object>;
    duplicateQrCode(qrId: number, userId: number): Promise<{
        id: number;
    }>;
    getQrImage(id: number, format: QrImageFormatEnum, userId: number): Promise<import("../qr-codes/entities/qr-code.entity").QrCode>;
    private getColorValue;
    private getGradientValue;
}
