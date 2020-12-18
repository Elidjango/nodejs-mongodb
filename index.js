const EXPRESS = require('express');
require('dotenv').config();
const APP = EXPRESS();

// - VAR:GLOBALS
global.ModeRUN = 1; // 1 = dev; 2 = production;

// - Imports
const { dbConnect } = require('./database/config.database');

// - DataBase:
dbConnect();

// - Cors:

// - Routers:

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