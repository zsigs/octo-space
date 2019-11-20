const mongoose = require("mongoose");

function mongooseConnect() {
  mongoose
  .connect("mongodb://localhost/proj2", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to mongo")
  })
  .catch((err) => {
    console.log("Error trying to connect to Mongodb", err)
  })
}

module.exports = {
  mongooseConnect,
};