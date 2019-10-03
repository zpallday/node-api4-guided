const express = require('express');
const helmet = require('helmet');
const secerts = require('../config/secrets')

console.log('environment', secerts.environment )
const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

module.exports = server;
