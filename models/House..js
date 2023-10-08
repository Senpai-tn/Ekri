const { Schema, model, connect } = require("mongoose");
connect("mongodb://mongo:27017/Ekri")
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
