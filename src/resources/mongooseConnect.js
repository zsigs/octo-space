const mongoose = require('mongoose');
MONGOUSER = process.env.MONGOUSER
MONGOPASS = process.env.MONGOPASS

function mongooseConnect() {
  mongoose
  .connect(`mongodb+srv://${MONGOUSER}:${MONGOPASS}@project2-tlhkk.gcp.mongodb.net/test?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to mongo')
  })
  .catch((err) => {
    console.log('Error trying to connect to Mongodb', err)
  })
}

module.exports = {
  mongooseConnect,
};