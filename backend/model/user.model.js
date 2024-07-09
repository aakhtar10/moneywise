const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, 
{
    versionKey: false,
}
)

const UserModel = mongoose.model("User", userSchema);

module.exports = {
    UserModel
}