const { Schema, model } = require('mongoose');

const TestSchema = Schema({
    // arg: typeOf;
});

module.exports = model("test", TestSchema);