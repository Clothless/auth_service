const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

module.exports = app;