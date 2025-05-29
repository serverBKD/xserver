import app from "./services/app.js";
import productRouter from "./routes/product.route.js";
import clientRouter from "./routes/client.route.js";
import taskRouter from "./routes/task.route.js";
import hanyuRouter from "./routes/hanyu.route.js";
import ventaRouter from "./routes/venta.route.js";
import blogRouter from "./routes/blog.route.js";
import listEmailRouter from "./routes/listemail.route.js";
import logRouter from "./routes/log.route.js";
import authRouter from "./routes/auth.route.js";
import providerRouter from "./routes/provider.route.js";
import partnerRouter from "./routes/partner.route.js";

app.use("/api/products", productRouter);
app.use("/api/clients", clientRouter);
app.use("/api/tasks", taskRouter);
app.use("/api/hanyu", hanyuRouter);
app.use("/api/ventas", ventaRouter);
app.use("/api/blog", blogRouter);
app.use("/api/listemail", listEmailRouter);
app.use("/api/logs", logRouter);
app.use("/api/auth", authRouter);
app.use("/api/providers", providerRouter);
app.use("/api/partners", partnerRouter);

app.get("/", (req, res) => {
  res.send("xserver!");
});
