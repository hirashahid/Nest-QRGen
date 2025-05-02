"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sentry = require("@sentry/nestjs");
const profiling_node_1 = require("@sentry/profiling-node");
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [(0, profiling_node_1.nodeProfilingIntegration)()],
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV || 'development',
});
Sentry.profiler.startProfiler();
Sentry.startSpan({
    name: 'My First Transaction',
}, () => {
});
Sentry.profiler.stopProfiler();
//# sourceMappingURL=instrument.js.map