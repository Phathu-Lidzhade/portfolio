import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes";

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running",
  });
});

app.use("/api/contact", contactRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Portfolio backend is running");
});