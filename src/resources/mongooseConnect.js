const mongoose = require('mongoose');
MONGOCONNECTSTR = process.env.MONGOCONNECTSTR;


function mongooseConnect() {
  mongoose
  .connect(`${MONGOCONNECTSTR}`, {
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