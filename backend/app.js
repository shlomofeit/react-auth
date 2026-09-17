import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = status < 500 ? err.message : "Internal Server Error";
  res.status(status).json({ error: message });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
