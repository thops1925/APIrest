const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{type:String , required:true},
    content:{type:String , required:true},
    contentDate:{type:Date , required:true , default: new Date }
})

module.exports = mongoose.model('content', user)

