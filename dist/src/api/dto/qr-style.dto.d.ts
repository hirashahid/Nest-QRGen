import { ErrorCorrectionLevel } from 'src/enums/error-correction-level.enum';
declare class QrStyleDto {
    position?: string;
    top?: string;
    left?: string;
    width?: string;
    height?: string;
    transform?: string;
    margin?: string;
}
declare class QrTextStyleDto {
    position?: string;
    top?: string;
    left?: string;
    textAlign?: string;
    width?: string;
    color?: string;
    overflow?: string;
}
declare class DotColorDto {
    cornerColor?: string;
    centerColor?: string;
}
declare class DotStyleDto {
    selectedCornerShape?: string;
    selectedCenterShape?: string;
}
declare class BulkQrCornersDto {
    dotColor: DotColorDto;
    squareColor?: string;
    squareStyle?: string;
    dotStyle: DotStyleDto;
}
declare class FrameDto {
    id: number;
    color: string;
    text: string;
    fontSize: number;
    backgroundColor: string;
}
declare class BulkQrShapeDto {
    backgroundColor: string;
    color: string;
    style: string;
    Value: string;
    templatename: string;
    qrstyle: QrStyleDto;
    qrtext: string;
    qrtextstyle: QrTextStyleDto;
    matchcomponent: string;
    activeindex: number;
}
export declare class QrStyleDataDto {
    shape: BulkQrShapeDto;
    corners: BulkQrCornersDto;
    logo?: string;
    frame: FrameDto;
    errorCorrectionLevel: ErrorCorrectionLevel;
}
export {};
