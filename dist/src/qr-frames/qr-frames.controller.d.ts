import { QrFramesService } from './qr-frames.service';
import { CreateQrFrameDto } from './dto/create-qr-frame.dto';
import { UpdateQrFrameDto } from './dto/update-qr-frame.dto';
export declare class QrFramesController {
    private readonly qrFramesService;
    constructor(qrFramesService: QrFramesService);
    uploadFile(file: Express.Multer.File, createQrFrameDto: CreateQrFrameDto): Promise<import("./entities/qr-frame.entity").QrFrame>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<import("./entities/qr-frame.entity").QrFrame>;
    update(id: number, file: Express.Multer.File, updateQrFrameDto: UpdateQrFrameDto): Promise<import("./entities/qr-frame.entity").QrFrame>;
    remove(id: number): Promise<void>;
}
