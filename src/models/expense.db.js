const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema({
    paid_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    involved_members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    amount:{
        type:Number,
        min:0,
        required:true
    },
    expense_currency:{
        eum:['INR','USD','EUR']
    },
    description:{
        type:String
    }
});
const expenseModel = mongoose.model('Expense',expenseSchema)
module.exports= expenseModel;