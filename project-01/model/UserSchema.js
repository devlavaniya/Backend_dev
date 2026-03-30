import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxLength:[25,"Name must contain 25 char only"]
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        minlength:[8,"Password must contain 8 char only"],
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})

const user=mongoose.model("User",userSchema);

export default user;
