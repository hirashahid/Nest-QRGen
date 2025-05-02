import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserResponseDto } from './dto/user-response.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IResponseMessage } from '../interfaces/response-message.interface';
import { GetByIdDto } from '../constants';
import { AddMemberDto } from './dto/create-member.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<UserResponseDto>;
    generateToken(dto: GetByIdDto): Promise<UserResponseDto>;
    getAllUsers(): Promise<UserResponseDto[]>;
    getUserById(dto: GetByIdDto): Promise<UserResponseDto>;
    updateUser(dto: GetByIdDto, updateUserDto: UpdateUserDto): Promise<User>;
    deleteUser(dto: GetByIdDto): Promise<IResponseMessage>;
    addMember(addMemberDto: AddMemberDto, userId: number): Promise<User>;
    getMembers(userId: number): Promise<User>;
    updateMember(memberId: number, updateMemberDto: UpdateMemberDto, userId: number): Promise<IResponseMessage>;
    deleteMember(memberId: number, userId: number): Promise<IResponseMessage>;
    updatePassword(userId: number, updatePasswordDto: UpdatePasswordDto): Promise<IResponseMessage>;
}
