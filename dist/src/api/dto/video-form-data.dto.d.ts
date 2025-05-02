export declare class VideoButtonDto {
    videobutton?: string;
    buttonurl?: string;
}
export declare class VideoFileDto {
    name?: string;
    file?: string;
}
export declare class WelcomeScreenImageDto {
    name?: string;
    file?: string;
}
export declare class VideoFormDataDto {
    imageGridType?: string;
    videobuttons?: VideoButtonDto[];
    qrName?: string;
    titleFontFamily?: string;
    TextFontFamily?: string;
    Video_URL?: string;
    videoFiles?: VideoFileDto[];
    videoCropCompany?: string;
    videoTech?: string;
    videoDescription?: string;
    welcomeScreenImage?: WelcomeScreenImageDto[];
}
