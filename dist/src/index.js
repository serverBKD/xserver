"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./services/app"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const client_route_1 = __importDefault(require("./routes/client.route"));
const task_route_1 = __importDefault(require("./routes/task.route"));
const hanyu_route_1 = __importDefault(require("./routes/hanyu.route"));
const venta_route_1 = __importDefault(require("./routes/venta.route"));
const blog_route_1 = __importDefault(require("./routes/blog.route"));
const listemail_route_1 = __importDefault(require("./routes/listemail.route"));
const log_route_1 = __importDefault(require("./routes/log.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const provider_route_1 = __importDefault(require("./routes/provider.route"));
app_1.default.use('/api/products', product_route_1.default);
app_1.default.use('/api/clients', client_route_1.default);
app_1.default.use('/api/tasks', task_route_1.default);
app_1.default.use('/api/hanyu', hanyu_route_1.default);
app_1.default.use('/api/ventas', venta_route_1.default);
app_1.default.use('/api/blog', blog_route_1.default);
app_1.default.use('/api/listemail', listemail_route_1.default);
app_1.default.use('/api/logs', log_route_1.default);
app_1.default.use('/api/auth', auth_route_1.default);
app_1.default.use('/api/providers', provider_route_1.default);
app_1.default.get('/', (_req, res) => {
    res.send('xserver!');
});
