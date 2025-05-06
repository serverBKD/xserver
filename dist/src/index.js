"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_service_1 = __importDefault(require("./services/app.service"));
const product_route_1 = __importDefault(require("./routes/product.route"));
app_service_1.default.use("/api/products", product_route_1.default);
app_service_1.default.get("/", (_req, res) => {
    res.send("Hello World!");
});
