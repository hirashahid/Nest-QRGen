export interface IQrStyle {
    shape: {
        backgroundColor: string;
        color: string;
        style: string;
    };
    corners: {
        dotColor: string;
        squareColor: string;
        squareStyle: string;
        dotStyle: string;
    };
    logo: string;
    frame: {
        id: number;
        color: string;
        text: string;
        fontSize: number;
        backgroundColor: string | null;
        textColor: string;
    };
    errorCorrectionLevel: string;
}
