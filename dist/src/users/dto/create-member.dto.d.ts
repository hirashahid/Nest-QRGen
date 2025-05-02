export declare class AddMemberDto {
    email: string;
    roleId: number;
    modules: number[];
    canDeleteAccount: number;
    userPermissions: Record<string, boolean>;
    folders?: number[];
}
