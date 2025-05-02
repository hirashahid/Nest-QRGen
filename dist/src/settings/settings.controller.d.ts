import { SettingsService } from './settings.service';
import { SettingsResponseDto } from './dto/settings-response.dto';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    findAll(): Promise<SettingsResponseDto[]>;
    findOneByKey(key: string): Promise<SettingsResponseDto>;
}
