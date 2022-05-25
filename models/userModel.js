const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true,"User must hsve a username"],
        unique: true,
    },
    password: {
        type: String,
        require: [true,"User must hsve a password"],
    },
});


const User = mongoose.model("User",userSchema);

module.exports = User;