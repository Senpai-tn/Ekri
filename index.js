import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from root service");
});

app.use("/api/user", proxy("http://user:2600"));
app.listen(2500, () => {
  console.log("root service started at 2500");
});
