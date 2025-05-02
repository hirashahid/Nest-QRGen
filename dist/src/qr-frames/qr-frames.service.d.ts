import { Repository } from 'typeorm';
import { QrFrame } from './entities/qr-frame.entity';
import { CreateQrFrameDto } from './dto/create-qr-frame.dto';
import { UpdateQrFrameDto } from './dto/update-qr-frame.dto';
export declare class QrFramesService {
    private readonly qrFrameRepository;
    private readonly uploadPath;
    constructor(qrFrameRepository: Repository<QrFrame>);
    create(file: Express.Multer.File, createQrFrameDto: CreateQrFrameDto): Promise<QrFrame>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<QrFrame>;
    private mapFrame;
    update(id: number, file: Express.Multer.File, updateQrFrameDto: UpdateQrFrameDto): Promise<QrFrame>;
    remove(id: number): Promise<void>;
    private ensureUploadDir;
    private saveFile;
}
