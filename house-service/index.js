const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const app = express();
const axios = require("axios");
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
