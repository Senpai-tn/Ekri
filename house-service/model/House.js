const { Schema, model, connect } = require("mongoose");
connect(
  "mongodb+srv://khaleddsahli:lnQuTDpmBZva5tZB@senpaidb.8wwyuzw.mongodb.net/Ekri?"
)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });
const houseSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
});

const House = model("houses", houseSchema);

module.exports = House;
