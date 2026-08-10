const mongoose = require('mongoose');
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to DB');
    }catch(err){
        console.log('error in connecting DB');
    }
}
module.exports = connectDB;