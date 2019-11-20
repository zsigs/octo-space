const { renderHome } = require("../controllers");

const express = require('express');
const router = express.Router();

router.get("/", renderHome);

module.exports = {
  router,
}