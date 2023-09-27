import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from user service");
});

app.listen(2600, () => {
  console.log("user service started at 2600");
});
