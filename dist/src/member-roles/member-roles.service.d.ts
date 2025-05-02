import { Repository } from 'typeorm';
import { CreateMemberRoleDto } from './dto/create-member-role.dto';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto';
import { MemberRole } from './entities/member-role.entity';
import { IResponseMessage } from 'src/interfaces/response-message.interface';
export declare class MemberRolesService {
    private readonly memberRoleRepository;
    constructor(memberRoleRepository: Repository<MemberRole>);
    create(createMemberRoleDto: CreateMemberRoleDto): Promise<MemberRole>;
    findAll(): Promise<MemberRole[]>;
    findOne(id: number): Promise<MemberRole>;
    update(id: number, updateMemberRoleDto: UpdateMemberRoleDto): Promise<MemberRole>;
    remove(id: number): Promise<IResponseMessage>;
}
