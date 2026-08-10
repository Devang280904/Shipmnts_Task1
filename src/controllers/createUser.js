const userModel = require('../models/user.db');

async function createUser(req,res){
    try{
        const data = req.body;
        if(data.user_name===null || data.email===null){
            return res.status(400).json({
                success:false,
                message:'username and email are required'
            })
        }
        const user = await userModel.findOne({
            email:data.email
        })
        if(user){
            return res.status(409).json({
                success:false,
                message:'A user with this email already exists'
            })
        }
        if(!user){
        const user  = await userModel.create({
            user_name:data.user_name,
            email:data.email
        })
        return res.status(201).json({
            success:true,
            message:'User created successfully',
            user
        })
    }

    }catch(err){
        return res.status(500).json({
            success:false,
            message:'Something went wrong, please try again'
        })
    }
    
}
module.exports = createUser;