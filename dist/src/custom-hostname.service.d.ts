export declare class CustomHostnameService {
    private readonly CONF_FILE_PATH;
    registerCustomDomain(domain: string, tls_version: string): Promise<any>;
    verifyDetails(id: string): Promise<any>;
    installCertificates(domain: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
