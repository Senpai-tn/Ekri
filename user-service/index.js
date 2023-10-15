const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const jwt = require("jsonwebtoken");
const { checkRole } = require("../middelware");
const axios = require("axios");
const User = require("./model/User");
const { catchError, checkAuth } = require("../middelware/fn");
const errors = require("../middelware/errors");
const app = express();

connect(
  "mongodb+srv://khaleddsahli:lnQuTDpmBZva5tZB@senpaidb.8wwyuzw.mongodb.net/Ekri"
)
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
    console.log(user);
    if (user !== null) {
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

app.put("/", [checkAuth()], async (req, res) => {
  try {
    const {
      _id,
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
    if (user) {
      Object.assign(user, {
        email: email ? email : user.email,
        password: password ? password : user.password,
        firstName: firstName ? firstName : user.firstName,
        lastName: lastName ? lastName : user.lastName,
        promo: promo ? promo : user.promo,
        tel: tel ? tel : user.tel,
        role: role ? role : user.role,
        deletedAt: deletedAt ? deletedAt : user.deletedAt,
        blockedTo: blockedTo ? blockedTo : user.blockedTo,
      });
      user
        .save()
        .then((savedUser) => {
          res.send({ user: savedUser });
        })
        .catch((error) => {
          catchError(error, res);
        });
    } else {
      res.status(404).send("user not found");
    }
  } catch (error) {
    catchError(error, res);
  }
});

app.post("/search", [], async (req, res) => {
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
