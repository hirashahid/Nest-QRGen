import { ERole } from '../../enums/role.enum';
import { User } from '../../users/entities/user.entity';
export declare class Role {
    id: number;
    roleName: ERole;
    description?: string;
    guardName?: string;
    users?: User[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
