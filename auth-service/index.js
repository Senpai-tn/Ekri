import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from auth service");
});

app.listen(2700, () => {
  console.log("auth service started at 2700");
});
