const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const app = express();
const axios = require("axios");
const { catchError } = require("../middelware/fn");

const House = require("./model/House");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const houses = await House.find();
    res.send(houses);
  } catch (error) {
    catchError(error, res);
  }
});

app.listen(2800, () => {
  console.log("house service started at 2800");
});
