const mongoose=require('mongoose');
const bcrypt=require("bcrypt");

const db=require('../configuration/db');

const {Schema}=mongoose;

const UserSchema=new Schema({
    email:{
     type:String,
     lowercase:true,
     required:true,
     unique:true,
    },
    password:{
       type:String,
       required:true
    }
});

UserSchema.pre('save',async function(){
    try{
        var user=this;
        const salt=await (bcrypt.genSalt(10));
        const hashpass=await bcrypt.hash(user.password,salt);

        user.password=hashpass;
    }
    catch(error){
        throw error
    }
});

const UserModel=db.model('user',UserSchema);

module.exports=UserModel;




