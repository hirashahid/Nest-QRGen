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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicApiService = void 0;
const common_1 = require("@nestjs/common");
const jsdom_1 = require("jsdom");
const { QRCodeStyling, } = require('qr-code-styling/lib/qr-code-styling.common.js');
const nodeCanvas = require("canvas");
const qr_data_type_enum_1 = require("../enums/qr-data-type.enum");
const file_uploads_service_1 = require("../file-uploads/file-uploads.service");
const qr_codes_service_1 = require("../qr-codes/qr-codes.service");
const qr_types_service_1 = require("../qr-types/qr-types.service");
const qr_frames_service_1 = require("../qr-frames/qr-frames.service");
const fs = require('fs');
let PublicApiService = class PublicApiService {
    constructor(fileUploadsService, qrCodeService, qrTypesService, qrFramesService) {
        this.fileUploadsService = fileUploadsService;
        this.qrCodeService = qrCodeService;
        this.qrTypesService = qrTypesService;
        this.qrFramesService = qrFramesService;
    }
    async generateQrImage(dto, format, userId) {
        try {
            const qrType = await this.qrTypesService.findOneByName(dto.type);
            let qrData;
            switch (dto.type) {
                case qr_data_type_enum_1.QrDataTypeEnum.EMAIL: {
                    const email = dto.data;
                    qrData = `mailto:${email.email}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`;
                    break;
                }
                case qr_data_type_enum_1.QrDataTypeEnum.SMS: {
                    const sms = dto.data;
                    qrData = `SMSTO:${sms.number}:${sms.message}`;
                    break;
                }
                case qr_data_type_enum_1.QrDataTypeEnum.TEXT: {
                    const text = dto.data;
                    qrData = text.text;
                    break;
                }
                case qr_data_type_enum_1.QrDataTypeEnum.URL: {
                    const url = dto.data;
                    qrData = url.url;
                    break;
                }
                case qr_data_type_enum_1.QrDataTypeEnum.VCARD: {
                    const vcard = dto.data;
                    const phoneList = (vcard.phone ?? [])
                        .map((p) => `TEL:${p}`)
                        .join('\n');
                    qrData = `
            BEGIN:VCARD
            VERSION:3.0
            N:${vcard.lastName};${vcard.name}
            ORG:${vcard.org}
            TITLE:${vcard.title}
            ${phoneList}
            EMAIL:${vcard.email}
            ADR:;;${vcard.adr};${vcard.city};;${vcard.zip};${vcard.country}
            URL:${vcard.url}
            END:VCARD`.trim();
                    break;
                }
                case qr_data_type_enum_1.QrDataTypeEnum.WHATSAPP: {
                    const wa = dto.data;
                    qrData = `https://wa.me/${wa.number}?text=${encodeURIComponent(wa.message)}`;
                    break;
                }
                case qr_data_type_enum_1.QrDataTypeEnum.WIFI: {
                    const wifi = dto.data;
                    qrData = `WIFI:T:${wifi.authType};S:${wifi.ssid};P:${wifi.password};${wifi.hidden ? 'H:true;' : ''};`;
                    break;
                }
                default:
                    qrData =
                        typeof dto.data === 'string' ? dto.data : JSON.stringify(dto.data);
            }
            const qrOptions = {
                type: 'canvas',
                width: 300,
                height: 300,
                data: qrData,
                margin: 10,
                jsdom: jsdom_1.JSDOM,
                nodeCanvas,
                image: dto.style.image,
                qrOptions: {
                    errorCorrectionLevel: dto.style.errorCorrectionLevel || 'Q',
                },
                imageOptions: {
                    hideBackgroundDots: true,
                    imageSize: 0.4,
                    margin: 0,
                },
                dotsOptions: {
                    type: dto.style.shape?.style || 'square',
                    color: this.getColorValue(dto.style.shape?.color) ||
                        dto.style.shape?.color,
                    gradient: this.getGradientValue(dto.style.shape?.color),
                },
                backgroundOptions: {
                    color: this.getColorValue(dto.style.shape?.backgroundColor) ||
                        dto.style.shape?.backgroundColor,
                    gradient: this.getGradientValue(dto.style.shape?.backgroundColor),
                },
                cornersSquareOptions: {
                    type: dto.style.corners.squareStyle || 'square',
                    color: this.getColorValue(dto.style.corners?.squareColor) || '#000000',
                    gradient: this.getGradientValue(dto.style.corners?.squareColor),
                },
                cornersDotOptions: {
                    type: dto.style.corners.dotStyle || 'square',
                    color: this.getColorValue(dto.style.corners?.dotColor) || '#000000',
                    gradient: this.getGradientValue(dto.style.corners.dotColor),
                },
            };
            const qr = new QRCodeStyling(qrOptions);
            const qrSvgBuffer = await qr.getRawData('svg');
            const qrSvgString = qrSvgBuffer.toString().replace(/^<\?xml.*\?>/, '');
            const frame = await this.qrFramesService.findOne(dto.style.frame.id);
            if (!frame?.my_svg_code && !frame?.svg_code) {
                throw new common_1.BadRequestException('Frame SVG code is missing');
            }
            const svgTemplate = frame.my_svg_code || frame.svg_code;
            const qrFrame = svgTemplate
                .replace(/{color}/g, `"${dto.style.frame.color?.color || ''}"`)
                .replace(/{textColor}/g, `"${dto.style.frame.textColor || ''}"`)
                .replace(/{fontSize}/g, `"${dto.style.frame.fontSize?.toString() || ''}"`)
                .replace(/{plainText}/g, dto.style.frame.text || '')
                .replace(/(<path d="M160.238 75.4116H40.1659C36.3766 75.4116[\s\S]+?fill-opacity="0.16" \/>)/, `$1${qrSvgString}`);
            fs.writeFileSync('qr_frame_merged.svg', qrFrame);
            console.log('Saved as merged-qr.png — open this file in  image viewer.');
            return {};
        }
        catch (error) {
            throw error;
        }
    }
    async duplicateQrCode(qrId, userId) {
        const qrCode = await this.qrCodeService.findOneForPublicApi(qrId, userId);
        const duplicatedQrCode = await this.qrCodeService.duplicateQrCode(qrCode);
        return {
            id: duplicatedQrCode.id,
        };
    }
    async getQrImage(id, format, userId) {
        return await this.qrCodeService.findByImageFormat(id, format, userId);
    }
    getColorValue(colorOrGradient) {
        return colorOrGradient?.color;
    }
    getGradientValue(colorOrGradient) {
        if (!colorOrGradient?.gradient)
            return undefined;
        return {
            type: colorOrGradient?.gradient?.type,
            rotation: colorOrGradient?.gradient.rotation || 0,
            colorStops: colorOrGradient?.gradient.colorStops.map((stop) => ({
                offset: stop?.offset,
                color: stop?.color,
            })),
        };
    }
};
exports.PublicApiService = PublicApiService;
exports.PublicApiService = PublicApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_uploads_service_1.FileUploadsService,
        qr_codes_service_1.QrCodeService,
        qr_types_service_1.QrTypeService,
        qr_frames_service_1.QrFramesService])
], PublicApiService);
//# sourceMappingURL=public-api.service.js.map