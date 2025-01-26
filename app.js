const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const errorHandler = require('./src/middleware/errorHandler');
const swaggerDocs = require('./src/config/swagger');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
// Serve Swagger UI
swaggerDocs(app);

app.use(errorHandler);

module.exports = app;