"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHostnameService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const process = require("node:process");
const child_process_1 = require("child_process");
const fs = require("fs");
const path = require("path");
class CustomHostnameService {
    constructor() {
        this.CONF_FILE_PATH = '/etc/httpd/conf.d/welcome-le-ssl.conf';
    }
    async registerCustomDomain(domain, tls_version) {
        const url = `https://api.cloudflare.com/client/v4/zones/${process.env.CF_ZONE_ID}/custom_hostnames`;
        const payload = {
            hostname: domain,
            ssl: {
                method: 'http',
                type: 'dv',
                settings: {
                    http2: 'on',
                    tls_1_3: 'on',
                    min_tls_version: tls_version,
                },
            },
        };
        try {
            const response = await axios_1.default.post(url, payload, {
                headers: {
                    'X-Auth-Email': process.env.CF_API_EMAIL,
                    'X-Auth-Key': process.env.CF_API_TOKEN,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            console.error('Cloudflare Error:', error.response?.data || error.message);
            throw new common_1.HttpException(error.response?.data?.errors?.[0]?.message || 'Cloudflare API failed', error.response?.status || 500);
        }
    }
    async verifyDetails(id) {
        const url = `https://api.cloudflare.com/client/v4/zones/${process.env.CF_ZONE_ID}/custom_hostnames/${id}`;
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    'X-Auth-Email': process.env.CF_API_EMAIL,
                    'X-Auth-Key': process.env.CF_API_TOKEN,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            console.error('Cloudflare Error:', error.response?.data || error.message);
            throw new common_1.HttpException(error.response?.data?.errors?.[0]?.message || 'Cloudflare API failed', error.response?.status || 500);
        }
    }
    async installCertificates(domain) {
        if (!domain) {
            throw new common_1.HttpException("Domain is required", 400);
        }
        const certPath = `/etc/letsencrypt/live/${domain}`;
        const fullchain = path.join(certPath, 'fullchain.pem');
        const privkey = path.join(certPath, 'privkey.pem');
        const certbotCommand = `certbot --apache -d ${domain}`;
        const reloadCommand = `systemctl reload httpd`;
        const vHostData = `
<IfModule mod_ssl.c>
<VirtualHost *:443>
    ServerName ${domain}
    ServerAlias ${domain}
    DocumentRoot /var/www/html/public/frontend/dist

    <Directory /var/www/html/public/frontend/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog /var/log/httpd/${domain}-error.log
    CustomLog /var/log/httpd/${domain}-access.log combined

    Include /etc/letsencrypt/options-ssl-apache.conf
    SSLCertificateFile ${fullchain}
    SSLCertificateKeyFile ${privkey}
</VirtualHost>
</IfModule>\n\n`;
        try {
            const { stdout } = await (0, child_process_1.exec)(certbotCommand);
            if (!fs.existsSync(fullchain) || !fs.existsSync(privkey)) {
                throw new Error('Certificate files not found after certbot execution.');
            }
            fs.appendFileSync(this.CONF_FILE_PATH, vHostData, 'utf8');
            await (0, child_process_1.exec)(reloadCommand);
            return { success: true, message: "SSL installed and Apache reloaded" };
        }
        catch (error) {
            throw new common_1.HttpException("SSL installation failed: " + (error.stderr || error.message), 500);
        }
    }
}
exports.CustomHostnameService = CustomHostnameService;
//# sourceMappingURL=custom-hostname.service.js.map