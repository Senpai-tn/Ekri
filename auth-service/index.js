const express = require("express");
const cors = require("cors");
const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require("firebase/auth");
const { auth } = require("./firebase");
const { catchError } = require("../middelware/fn");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from auth service");
});

app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        res.status(200).send(value);
      })
      .catch((error) => {
        catchError(error, res);
      });
  } catch (error) {
    catchError(error, res);
  }
});

app.post("/register", (req, res) => {
  try {
    const { email, password } = req.body;
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        res.send(response.user);
      })
      .catch((error) => {
        catchError(error, res);
      });
  } catch (error) {
    catchError(error, res);
  }
});

app.listen(2700, () => {
  console.log("auth service started at 2700");
});
