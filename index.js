const EXPRESS = require('express');
const APP = EXPRESS();

// - VARIABLE GLOBALS
global.ModeRUN = 1; // 1 = dev; 2 = production;

// - Imports
const { dbConnect } = require('./database/config.database');

// - DataBase:
dbConnect();

// - Cors:

// - Routers:

// - Listen server:
APP.listen(3000, () => {
    console.log(`Run port localhost:3000`);
});