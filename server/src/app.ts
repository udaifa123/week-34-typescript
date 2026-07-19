import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import { logger } from "./middleware/logger";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/users", userRoutes);

export default app;