const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const jwt = require("jsonwebtoken");
const { checkRole } = require("../middelware");
const axios = require("axios");
const User = require("../models/User");
const { catchError, checkAuth } = require("../middelware/fn");
const House = require("../models/House.");
const errors = require("../middelware/errors");
const app = express();

connect("mongodb://mongo:27017/Ekri")
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

app.post("/login", [], async (req, res) => {
  try {
    const { email, password } = req.body;
    // axios
    //   .post("http://auth:2700/login", { email, password })
    //   .then((response) => {
    //     if (response.erorr) {
    //       res.status(500).send(response.data.code);
    //     } else res.send(response.data);
    //   })
    //   .catch((error) => {
    //     res.send({ error: error.message });
    //   });
    const user = await User.findOne({ email });
    if (user) {
      if (user.password === password) {
        if (user.deletedAt === null) {
          if (user.blockedTo === null) {
            const token = jwt.sign({ user }, "Hello");
            res.send({ user, token });
          } else res.status(401).send(errors.blocked);
        } else {
          res.status(402).send(errors.deleted);
        }
      } else res.status(403).send(errors.wrongPassword);
    } else res.status(404).send(errors.notFound);
  } catch (error) {
    catchError(error, res);
  }
});

app.post("/register", [], async (req, res) => {
  try {
    const { email, password, uid, firstName, lastName, tel } = req.body;
    // axios
    //   .post("http://auth:2700/register", { email, password })
    //   .then((response) => {
    //     if (response.data.name === "FirebaseError") {
    //       catchError(response.data.code, res);
    //     } else {
    const user = new User({
      email,
      password,
      uid,
      firstName,
      lastName,
      tel,
    });
    user
      .save()
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        catchError(error, res);
      });
    //     }
    //   })
    //   .catch((error) => {
    //     catchError(error, res);
    //   });
  } catch (error) {
    catchError(error, res);
  }
});

app.put("/", async (req, res) => {
  try {
    const {
      _id,
      uid,
      email,
      password,
      firstName,
      lastName,
      promo,
      tel,
      role,
      deletedAt,
      blockedTo,
    } = req.body;
    const user = await User.findById(_id);
    console.log(firstName);
    Object.assign(user, {
      email,
      password,
      firstName: firstName ? firstName : user.firstName,
      lastName,
      promo,
      tel,
      role,
      deletedAt,
      blockedTo,
    });
    user
      .save()
      .then((savedUser) => {
        res.send(savedUser);
      })
      .catch((error) => {
        catchError(error, res);
      });
  } catch (error) {
    catchError(error, res);
  }
});

app.post("/search", [checkAuth(), checkRole(["1", "55"])], async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    catchError(error, res);
  }
});

app.listen(2600, () => {
  console.log("user service started at 2600");
});
