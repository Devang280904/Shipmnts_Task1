const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
async function authLogin(req,res){
    try{
        const {userEmail,userPassword} = req.body;
        const existsuser = await userModel.findOne({
            userEmail:userEmail
        });
        if(!existsuser){
            return res.status(404).json({
                message:'User does not exists with this email'
            });
        }
        const storedPassword = existsuser.userPassword;
        const isMatch = await bcrypt.compare(userPassword,storedPassword);
        if(!isMatch){
            return res.status(401).json({
                message:'Wrong Password'
            })
        }
        const payload = {
            userId:existsuser._id,
            userRole:existsuser.userRole
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET);
        
        return res.status(200).json({
            message:'User Authenticated',
            token
        })

    }
    catch(err){
        return res.status(500).json({
            message:'Internal server error',
            error : err.message
        })
    }
}
module.exports = authLogin;