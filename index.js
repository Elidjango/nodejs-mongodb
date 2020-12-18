const EXPRESS = require('express');
const APP = EXPRESS();

APP.listen(3000, () => {
    console.log(`Run port localhost:3000`);
});