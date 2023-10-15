const checkRole = (roles) => {
  return (req, res, next) => {
    if (req.user) {
      console.log(roles, req.user);
      next();
    } else {
      res.send("not authentified");
    }
  };
};

module.exports = { checkRole };
