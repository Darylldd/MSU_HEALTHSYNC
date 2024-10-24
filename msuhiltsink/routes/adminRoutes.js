const express = require('express');
const nodejs = require('../controllers/adminController');
const routes = express.Router();

routes.get('/login', nodejs.login);
routes.get('/signup', nodejs.signup);

module.exports = routes;