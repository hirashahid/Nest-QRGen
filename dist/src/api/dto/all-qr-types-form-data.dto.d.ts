declare class FileDto {
    name?: string;
    file: string;
}
declare class CategoryDto {
    category: string;
    categoryValue: string;
}
declare class NutrientDto {
    nutrient: string;
    nutrientvalue: string;
}
declare class IngredientDto {
    ingredient: string;
}
export declare class EventFormDataDto {
    imageGridType: string;
    qrName: string;
    titleFontFamily: string;
    TextFontFamily: string;
    eventImgUpload: FileDto[];
    eventDescription: string;
    eventWebsite?: string;
    globalSearchAddress: string;
    businessAdditionalInfo: string;
    organizationName: string;
    organizationWebsite: string;
    organizationtelephone: string;
    organizationEmail: string;
    welcomeScreenImage: FileDto[];
    globalUrl?: string;
}
export declare class VcardPlusFormDataDto {
    imageGridType: string;
    qrName: string;
    titleFontFamily: string;
    TextFontFamily: string;
    vCardPlusprofileImage: FileDto[];
    vCardName: string;
    vCardSurname: string;
    vCardPlusAboutYouTitle: string;
    textAlign: string;
    globalSearchAddress: string;
    imagePageCard: FileDto[];
    vCardSummary: string;
    globalUrl: string;
    vCardCompanyName: string;
    vCardCompanyProfessionName: string;
    vCardCustomizeYourButtonPhone: string;
    vCardCustomizeYourButtonEmail: string;
    vCardCustomizeYourButtonLocation: string;
    vCardCustomizeYourButtonContact: string;
    Bitcoinurl: string;
    Bitcointext: string;
    Bitcoinbuttontext: string;
    welcomeScreenImage: FileDto[];
}
export declare class ProductFormDataDto {
    imageGridType: string;
    productCategories: CategoryDto[];
    Nutrients: NutrientDto[];
    productingredients: IngredientDto[];
    qrName: string;
    titleFontFamily: string;
    TextFontFamily: string;
    productAppLogo: FileDto[];
    ProductAppName: string;
    productDescription: string;
    ProductDeveloper: string;
    nutritionalInformationQualification: string;
    productIngredients: IngredientDto[];
    productNutrient: NutrientDto[];
    Certificates: FileDto[];
    Organic: FileDto[];
    Responsibleconsumption: FileDto[];
    RecyclingStamps: FileDto[];
    welcomeScreenImage: FileDto[];
}
export declare class CouponFormDataDto {
    imageGridType: string;
    qrName: string;
    titleFontFamily: string;
    TextFontFamily: string;
    CouponFIleCoverImage: FileDto[];
    couponCompany: string;
    couponTitle: string;
    couponDescription: string;
    couponSalesBadge: string;
    couponButtonToSee: string;
    globalSearchAddress: string;
    couponCode: string;
    couponValidUntil: string;
    couponTermsAndConditions: boolean;
    couponInfoButton: string;
    couponInfoURL: string;
}
export declare class PdfFormDataDto {
    imageGridType: string;
    qrName: string;
    titleFontFamily: string;
    TextFontFamily: string;
    pdfFIleCoverImage: FileDto[];
    pdfFiles: FileDto[];
    pdfLogoCoverImage: FileDto[];
    pdfCompany: string;
    pdfDescription: string;
    pdfWebsite: string;
    pdfButtonText: string;
    globalTimeSchedulingName?: string;
    globalTimeSchedulingDays: string[];
    welcomeScreenImage: FileDto[];
}
export declare class PlaylistFormDataDto {
    imageGridType: string;
    qrName: string;
    titleFontFamily: string;
    TextFontFamily: string;
    playlistInfoTitle: string;
    playlistInfoName: string;
    playlistInfoDescription?: string;
    playlistImg: FileDto[];
    playlistItems: FileDto[];
}
export declare class ImageFormDataDto {
    imageGridType: string;
    qrName: string;
    titleFontFamily: string;
    TextFontFamily: string;
    imagePageCard: FileDto[];
}
export declare class BusinessFormDataDto {
    imageGridType: string;
    qrName: string;
    titleFontFamily: string;
    TextFontFamily: string;
    businessCompanyImage: FileDto[];
    businessContentCompany: string;
    businessContentTitle: string;
    businessContentSubtitle: string;
    imagePageCard: FileDto[];
    globalSearchAddress: string;
}
export declare class AppsFormDataDto {
    imageGridType: string;
    qrName: string;
    titleFontFamily: string;
    TextFontFamily: string;
    Appname: string;
    AppDeveloperCompany: string;
    Applogo: FileDto[];
    Appdescription: string;
    Appwebsite: string;
    appsPlayStoreLink: string;
    appsAppStoreLink: string;
    appsAmazonStoreLink: string;
}
export declare class SocialMediaFormDataDto {
    imageGridType: string;
    qrName: string;
    titleFontFamily: string;
    TextFontFamily: string;
    socialMediaLogo: FileDto[];
    socialMediatitle: string;
    socialMediaDescription: string;
    Coverimage: FileDto[];
    globalSearchAddress: string;
    Bitcoinurl: string;
    Bitcointext: string;
    Bitcoinbuttontext: string;
    Contacturl: string;
    Contacttext: string;
    Contactbuttontext: string;
    Facebookurl: string;
    Facebooktext: string;
    Facebookbuttontext: string;
    Kitchenurl?: string;
    Kitchentext?: string;
    Kitchenbuttontext?: string;
}
export declare class AppearanceDto {
    triggeredCard: string;
    triggeredFrame: string;
    foregroundColor: string;
    backgroundColor: string;
    titleFontFamily: string;
    textFontFamily: string;
    triggeredQrType: string;
}
export declare class ListOfLinksFormDataDto {
    imageGridType: string;
    qrName?: string;
    titleFontFamily: string;
    TextFontFamily: string;
    linkLogo: FileDto[];
    linkTitle: string;
    linkDescription: string;
    imagePageCard: FileDto[];
    contentLinks?: string[];
    welcomeScreenImage?: FileDto[];
    Bitcoinurl: string;
    Bitcointext: string;
    Bitcoinbuttontext: string;
    Kitchenurl: string;
    Kitchentext: string;
    Kitchenbuttontext: string;
}
export declare class URLFormData {
    imageGridType: string;
    welcomeScreenImage?: FileDto[];
    welcomeScreenTime: number;
    qrName?: string;
}
declare const WifiFormDataDto_base: import("@nestjs/common").Type<Partial<URLFormData>>;
export declare class WifiFormDataDto extends WifiFormDataDto_base {
    ssid: string;
    password: string;
}
declare class InnerFormDataDto {
    name?: string;
    surname?: string;
    company?: string;
    title?: string;
}
declare const EmailInnerFormDataDto_base: import("@nestjs/common").Type<Partial<InnerFormDataDto>>;
declare class EmailInnerFormDataDto extends EmailInnerFormDataDto_base {
    email: string;
    subject: string;
    message: string;
}
declare const WhatsAppInnerFormDataDto_base: import("@nestjs/common").Type<Partial<EmailInnerFormDataDto>>;
declare class WhatsAppInnerFormDataDto extends WhatsAppInnerFormDataDto_base {
    number: string;
}
declare const VcardFormDataDto_base: import("@nestjs/common").Type<Partial<URLFormData>>;
export declare class VcardFormDataDto extends VcardFormDataDto_base {
    globalSearchAddress?: string;
    formData?: InnerFormDataDto;
    vCardPlusNumberLabel?: string;
    vCardPlusPersonalNumber?: string;
    vCardEmailLabel?: string;
    vCardPersonalEmail?: string;
    vCardwebLabel?: string;
    vCardPersonalWebsite?: string;
    globalStreet?: string;
    globalNumber?: string;
    globalPostalCode?: string;
    globalCity?: string;
    globalState?: string;
    globalCountry?: string;
    globalUrl?: string;
    globalLatitude?: string;
    globalLongitude?: string;
}
declare const EmailFormDataDto_base: import("@nestjs/common").Type<Partial<URLFormData>>;
export declare class EmailFormDataDto extends EmailFormDataDto_base {
    formData?: EmailInnerFormDataDto;
}
declare const TextFormDataDto_base: import("@nestjs/common").Type<Partial<URLFormData>>;
export declare class TextFormDataDto extends TextFormDataDto_base {
    message: string;
}
declare const WhatsAppFormDataDto_base: import("@nestjs/common").Type<Partial<URLFormData>>;
export declare class WhatsAppFormDataDto extends WhatsAppFormDataDto_base {
    formData?: WhatsAppInnerFormDataDto;
}
export {};
