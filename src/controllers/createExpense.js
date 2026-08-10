const expenseModel = require('../models/expense.db');
const userModel = require('../models/user.db');
const groupModel = require('../models/group.db');
async function createExpense(req,res){
    try{
        const data = req.body;
        if(data.amount<0){
            return res.status(400).json({
                success:false,
                message:"amount must be greater than 0"
            })
        }
        const user = await userModel.findById(data.paid_by);
        const group = await groupModel.findOne({
            owner_id:user._id,
        })
        if(!group){
            return res.status(404).json({
                success: false,
                message: `No group found with id ${user._id}`

            })
        }
        const check = group.members.some(
            memberId => memberId.equals(data.paid_by)
        )
        if(!check){
            return res.status(403).json({
                success: false,
                message: "paid_by must be a member of this group"
            })
        }
        const expense = expenseModel.create({
            paid_by:data.user._id,
            amount:data.amount,
            expense_currency:data.expense_currency,
            description:data.description
        })
        return res.status(200).json({
            success: true,
            message: "Expanse created successfully"

        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Something went wrong, please try again"
        })
    }
    
}
module.exports = createExpense;