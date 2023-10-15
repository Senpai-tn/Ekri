const jwt = require("jsonwebtoken");

const checkAuth = () => {
  return (req, res, next) => {
    jwt.verify(req.headers.authorization, "Hello", function (err, decoded) {
      if (err) {
        res.send(err);
      } else next();
      if (decoded.user === undefined) {
        res.send("not authentified");
      } else {
        req.user = decoded.user;
      }
    });
  };
};

const catchError = (error, res) => {
  res.status(500).send({ error: error.message });
};

module.exports = { catchError, checkAuth };
