import express from "express";
import cors from "cors"
import connectToDatabase from "./db";
import userRoutes from "./routes/user.routes";
import categoryRoutes from "./routes/category.routes";
import taskRoutes from "./routes/task.routes";
import dotenv from "dotenv";

const application = express();
application.use(express.json())
application.use(cors())
dotenv.config();

application.use(express.json())

const PORT = 1337

connectToDatabase()

application.use("/user", userRoutes)
application.use("/categories", categoryRoutes)
application.use("/tasks", taskRoutes)

application.listen(PORT, () => {
    console.log(`Server running in port ${PORT} 🚀`);
})