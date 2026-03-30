import user from "../model/UserSchema.js";
export const getAllUsers=async(req,res)=>{
    try{
        const users=await user.find({},{name:1,email:1,_id:0});
        res.status(200).json({
            success:true,
            users
        })
    }catch(error){
        console.log("cant get",error);
    }
}