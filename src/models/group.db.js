const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    group_name:{
        type:String,
        required:true
    },
    owner_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true
    },
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    base_currency:{
        eum:['INR','USD','EUR'],
    }
})
const groupModel = mongoose.model('Group',groupSchema);
module.exports =groupModel;