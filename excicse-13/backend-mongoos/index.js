import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (_req, res) => {
  res.send("My server");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is http://localhost:${port}`);
});
