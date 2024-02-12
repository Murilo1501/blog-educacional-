const {mongoose,db} = require('./../database/dbconn');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password:String,
    type_user:String,
    created_at:Date
})


module.exports = userSchema;