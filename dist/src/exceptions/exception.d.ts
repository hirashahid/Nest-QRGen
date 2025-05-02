import { HttpException, HttpStatus } from '@nestjs/common';
export type ExceptionInfo = {
    statusCode: HttpStatus;
    code: string;
    message: string;
};
export declare class CustomHttpException extends HttpException {
    private readonly code;
    constructor(exceptionInfo: ExceptionInfo);
    getCode(): string;
}
