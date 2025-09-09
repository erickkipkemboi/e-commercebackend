import express, {Application} from "express"
import userRoutes from "./routes/users";
import productRoutes from "routes/products"
import ordersRoutes from "routes/orders"

const app: Application =express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/orders",orderRoutes);