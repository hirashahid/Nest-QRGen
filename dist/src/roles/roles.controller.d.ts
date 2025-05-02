import { RolesService } from './roles.service';
import { UpdateRoleDto } from './dto/update-role.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleResponseDto } from './dto/role-response.dto';
import { GetByIdDto } from '../constants';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createUserDto: CreateRoleDto): Promise<RoleResponseDto>;
    findAll(): Promise<RoleResponseDto[]>;
    findOne(dto: GetByIdDto): Promise<RoleResponseDto>;
    update(dto: GetByIdDto, updateRoleDto: UpdateRoleDto): Promise<RoleResponseDto | {
        message: string;
    }>;
    remove(dto: GetByIdDto): Promise<{
        message: string;
    }>;
}
