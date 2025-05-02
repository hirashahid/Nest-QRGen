export declare class UpdateMemberDto {
    memberRoleId: number;
    modules: number[];
    canDeleteAccount: number;
    userPermissions: Record<string, boolean>;
    folders?: number[];
}
