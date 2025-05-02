export declare class GetByPaginationQueryDto {
    page: number;
    per_page: number;
    user_id: number;
    name?: string;
    status?: number;
    favorites?: boolean;
    types?: string[];
    sort_recent?: boolean;
    sort_name?: boolean;
}
