const jwt = require("jsonwebtoken");

const checkAuth = () => {
  return (req, res, next) => {
    req.user = { firstName: "Khaled" };
    next();
    // jwt.verify(
    //   "eyJhbGciOiJIUzI1NiJ9.a2hhbGVk.u2FUKLLrpozlFWqT_BmURv_wfOHGepuvGhpKJsDcIak",
    //   "Hello",
    //   function (err, decoded) {
    //     if (err) {
    //       res.send("error");
    //     }

    //     if (decoded.user === undefined) {
    //       res.send("not authentified");
    //     } else {
    //       req.user = decoded.user;
    //       next();
    //     }
    //   }
    // );
  };
};

const catchError = (error, res) => {
  res.status(500).send({ error: error.message });
};

module.exports = { catchError, checkAuth };
