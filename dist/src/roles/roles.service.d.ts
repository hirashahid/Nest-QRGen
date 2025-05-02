import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.entity';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleResponseDto } from './dto/role-response.dto';
import { ERole } from '../enums/role.enum';
export declare class RolesService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    create(createRoleDto: CreateRoleDto): Promise<RoleResponseDto>;
    findAll(): Promise<RoleResponseDto[]>;
    findOne(id: number): Promise<RoleResponseDto>;
    findOneByRole(role: ERole): Promise<Role>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<RoleResponseDto | {
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
