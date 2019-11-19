require("dotenv").config()
const { PORT } = process.env
const { app } = require('./config')


app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`App listening on port ${PORT}`);
});