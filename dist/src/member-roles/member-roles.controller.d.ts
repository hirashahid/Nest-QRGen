import { MemberRolesService } from './member-roles.service';
import { CreateMemberRoleDto } from './dto/create-member-role.dto';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto';
import { MemberRole } from './entities/member-role.entity';
import { IResponseMessage } from 'src/interfaces/response-message.interface';
export declare class MemberRolesController {
    private readonly memberRolesService;
    constructor(memberRolesService: MemberRolesService);
    create(createMemberRoleDto: CreateMemberRoleDto): Promise<MemberRole>;
    findAll(): Promise<MemberRole[]>;
    findOne(id: string): Promise<MemberRole>;
    update(id: string, updateMemberRoleDto: UpdateMemberRoleDto): Promise<MemberRole>;
    remove(id: string): Promise<IResponseMessage>;
}
