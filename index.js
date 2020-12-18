// DOTENV
require('dotenv').config();

const EXPRESS = require('express');
const CORS = require('cors');

// Create serve
const APP = EXPRESS();

// - VAR:GLOBALS
global.ModeRUN = 1; // 1 = dev; 2 = production;

// - Imports
const { dbConnect } = require('./database/config.database');

// - DataBase:
dbConnect();

// - Cors:
APP.use(CORS());

// - Routers:
APP.use('/api/test', require('./router/test.router'));

// - Listen server:
let _port;
if (global.ModeRUN === 1) {
    _port = process.env.PORT_API_DEV;
} else if (global.ModeRUN === 2) {
    _port = process.env.PORT_API_PROD;
}

APP.listen(_port, () => {
    console.log(`Run port localhost:${_port}`);
});