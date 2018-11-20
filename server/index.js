const express = require('express');
const Sentry = require('@sentry/node');

const app = express();
const port = 8080;
const path = require('path');
const config = require('../config');

Sentry.init({ dsn: config.nodedsn });

app.use(Sentry.Handlers.requestHandler());

app.use(express.static(path.join(__dirname, '.fa./publicd/')));

app.use(Sentry.Handlers.errorHandler());

app.listen(port, () => console.log(`listening on port ${port}`));
