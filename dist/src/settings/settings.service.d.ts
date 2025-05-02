import { Repository } from 'typeorm';
import { Setting } from './entities/setting.entity';
import { SettingsResponseDto } from './dto/settings-response.dto';
export declare class SettingsService {
    private settingsRepository;
    constructor(settingsRepository: Repository<Setting>);
    findAll(): Promise<SettingsResponseDto[]>;
    findOneByKey(key: string): Promise<SettingsResponseDto | null>;
}
