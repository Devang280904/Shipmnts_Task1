const groupModel = require('../models/group.db');
const userModel = require('../models/user.db');

async function createGroup(req,res){
    try{
        const data = req.body;
        if(data.group_name===null || data.owner_id===null || data.members===null || data.base_currency===null){
            return res.status(400).json({
                success:false,
                message:'Please add all required field'
            })
        }
        const user = await userModel.findById(data.owner_id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: `No user found with id ${data.owner_id}`
            })
        }
        
        const group = await groupModel.create({
            group_name:data.group_name,
            owner_id:user._id,
            base_currency:data.base_currency
        })
        return res.status(201).json({
            success:true,
            message:'Group created successfully',
            group
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:'Something went wrong, Please try again'
        })
    }
    
}
module.exports = createGroup;