const MONGOOSE = require('mongoose');
let _config;

if (global.ModeRUN === 1) {
    _config = `mongodb://${process.env.HOST_DEV}/${process.env.NAMEDB_DEV}`;
} else if (global.ModeRUN === 2) {
    _config = `mongodb+srv://${process.env.USERNAME_PROD}:${process.env.PASSWORD_PROD}@${process.env.HOST_PROD}/${process.env.NAMEDB_PROD}`;
}

const dbConnect = async() => {
    try {
        await MONGOOSE.connect(`${_config}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        if (global.ModeRUN === 1) {
            console.log("MONGOOSE ONLINE IN MODE LOCAL...");
        } else if (global.ModeRUN === 2) {
            console.log("MONGOOSE ONLINE IN MODE PRODUCTION...");
        }
    } catch (error) {
        console.log(error);
        if (global.ModeRUN === 1) {
            throw new Error("ERROR OF CONNECTION MONGOOSE IN MODE LOCAL.");
        } else if (global.ModeRUN === 2) {
            throw new Error("ERROR OF CONNECTION MONGOOSE IN MODE PRODUCTION.");
        }
    }
}

module.exports = { dbConnect };