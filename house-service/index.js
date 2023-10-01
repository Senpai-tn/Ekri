import express from "express";
import cors from "cors";
import { connect } from "mongoose";
const app = express();

connect("mongodb://mongo:27017")
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from house service");
});

app.listen(2800, () => {
  console.log("house service started at 2800");
});
