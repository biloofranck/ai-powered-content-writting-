import express from "express";
import dotenv from "dotenv";
import appRoutes from "./routes/route";
import cors from "cors"

dotenv.config();
const Port = process.env.APP_PORT;
const app = express();

app.use(cors())

app.use(express.json());
app.use("/", appRoutes);

app.listen(Port, () => {
    console.log(
        `Server running successfully on http://${process.env.DB_HOST}:${Port}`
    );
});
