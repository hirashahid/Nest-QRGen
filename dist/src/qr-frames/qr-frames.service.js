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
exports.QrFramesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const path = require("path");
const fs = require("fs");
const qr_frame_entity_1 = require("./entities/qr-frame.entity");
const helper_1 = require("../../utils/helper");
const helper_2 = require("../../utils/helper");
let QrFramesService = class QrFramesService {
    constructor(qrFrameRepository) {
        this.qrFrameRepository = qrFrameRepository;
        this.uploadPath = 'uploads/frames';
        this.ensureUploadDir();
    }
    async create(file, createQrFrameDto) {
        try {
            if (file) {
                createQrFrameDto.file = this.saveFile(file);
            }
            const qrFrame = this.qrFrameRepository.create(createQrFrameDto);
            return await this.qrFrameRepository.save(qrFrame);
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        const frames = await this.qrFrameRepository.find();
        const updatedFrames = frames.map((frame) => {
            return this.mapFrame(frame);
        });
        return updatedFrames;
    }
    async findOne(id) {
        let frame = await this.qrFrameRepository.findOne({ where: { id } });
        if (!frame) {
            throw new common_1.NotFoundException(`QrFrame with ID ${id} not found`);
        }
        frame = this.mapFrame(frame);
        return frame;
    }
    mapFrame(frame) {
        frame.frame_text_settings = (0, helper_1.parseStringToArray)(frame.frame_text_settings);
        frame.class = (0, helper_1.parseStringToArray)(frame.class);
        frame.my_class = (0, helper_1.parseStringToArray)(frame.my_class);
        frame.my_frame_text_setting = (0, helper_1.parseStringToArray)(frame.my_frame_text_setting);
        frame.landing_page_class = (0, helper_1.parseStringToArray)(frame.landing_page_class);
        frame.svg_code = (0, helper_2.stripSlashes)(frame.svg_code);
        frame.my_svg_code = (0, helper_2.stripSlashes)(frame.my_svg_code);
        return frame;
    }
    async update(id, file, updateQrFrameDto) {
        const qrFrame = await this.findOne(id);
        if (!qrFrame) {
            throw new common_1.NotFoundException(`QrFrame with ID ${id} not found`);
        }
        if (file) {
            updateQrFrameDto.file = this.saveFile(file);
        }
        await this.qrFrameRepository.update(id, updateQrFrameDto);
        return this.findOne(id);
    }
    async remove(id) {
        const qrFrame = await this.findOne(id);
        if (!qrFrame) {
            throw new common_1.NotFoundException(`QrFrame with ID ${id} not found`);
        }
        if (qrFrame.file) {
            const fullPath = path.join(__dirname, '..', '..', qrFrame.file);
            if (fs.existsSync(fullPath)) {
                fs.unlinkSync(fullPath);
            }
        }
        await this.qrFrameRepository.delete(id);
    }
    ensureUploadDir() {
        const uploadDir = path.join(__dirname, '..', '..', this.uploadPath);
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
    }
    saveFile(file) {
        const extname = path.extname(file.originalname);
        const basename = path.basename(file.originalname, extname);
        const uuid = new Date().getTime().toString(36);
        const uniqueFilename = `${basename}-${uuid}${extname}`;
        const filePath = path.join(this.uploadPath, uniqueFilename);
        fs.renameSync(file.path, filePath);
        return `${this.uploadPath}/${uniqueFilename}`;
    }
};
exports.QrFramesService = QrFramesService;
exports.QrFramesService = QrFramesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(qr_frame_entity_1.QrFrame)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QrFramesService);
//# sourceMappingURL=qr-frames.service.js.map