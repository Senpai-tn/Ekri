const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const User = require("./model/user");
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
  res.send("Hello from user service");
});

app.post("/", (req, res) => {
  const u = new User();
  u.role = "a";
  u.save()
    .then((savedUser) => {
      res.send(savedUser);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/search", [], async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.listen(2600, () => {
  console.log("user service started at 2600");
});
