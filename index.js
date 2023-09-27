import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from root service");
});

app.listen(2500, () => {
  console.log("root service started at 2500");
});
