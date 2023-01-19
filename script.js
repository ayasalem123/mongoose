const mongoose = require('mongoose')
var Schema = mongoose.Schema
const personSchema = new Schema({
    name :
    { type:String,
      required:true,
    },
    age : Number,
    favoriteFoods:[String],
    });
module.exports = mongoose.model("person",personSchema);