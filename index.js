import express from "express";
import pool from "./Config/db.js";
import AuthRoutes from "./Routes/auth.routes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is running.....");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth", AuthRoutes);

try {
    const client = await pool.connect();
    console.log("✅ PostgreSQL connected successfully");
    client.release();
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
} catch (error) {
    console.error("❌ Database connection failed");
    console.error(error.message);
    process.exit(1);
}