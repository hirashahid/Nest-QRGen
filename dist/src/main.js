"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
Promise.resolve().then(() => require('./instrument.js'));
const express = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    process.env.TZ = 'Etc/UTC';
    app.use(express.json({
        verify: (req, res, buf) => {
            req.rawBody = buf;
        },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('QR Generation API')
        .setDescription('API documentation for the QR Generation application')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    await app.listen(process.env.APP_PORT || 3000);
    common_1.Logger.log(`🚀 Swagger API Documentation is available at: http://localhost:${process.env.APP_PORT}/api-docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map