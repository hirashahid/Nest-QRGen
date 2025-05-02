import { CreateQrFolderDto } from './create-qr-folder.dto';
declare const UpdateQrFolderDto_base: import("@nestjs/common").Type<Partial<CreateQrFolderDto>>;
export declare class UpdateQrFolderDto extends UpdateQrFolderDto_base {
    parent_id?: number;
}
export {};
