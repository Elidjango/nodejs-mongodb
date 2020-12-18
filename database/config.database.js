const MONGOOSE = require('mongoose');
const _NAMEDB_ = "my_test";
let _config;

if (global.ModeRUN === 1) {
    _config = `mongodb://localhost:27017/${_NAMEDB_}`;
} else if (global.ModeRUN === 2) {
    _config = `mongodb+srv://${_USERNAME_}:${_PASSWORD_}@${_HOST_}/${_NAMEDB_}`;
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