import express from 'express';
const router=express.Router();
import {logfun,Authentication} from '../express_MiddleWare/Authentication.js';


const port=3000;
let user=[
    {
    id:1,
    name:"Jagdish",
    Password:"owner12"
    },
    {
    id:2,
    name:"Ramesh",
    Password:"owner34"
    },
    
];

let validation=(req,res,next)=>{
    const token = req.query.token;
    if(token==='Admin123'){
        next();
    }
    else{
        res.send("User is unauthorize");
    }

}

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is running"
    });
});
router.get('/profile',validation,(req,res)=>{
    res.status(200).json({
        message:"user is log in"
    });
})

router.get('/user',(req,res)=>{
    res.status(200).json({
        message:"all users",
        user,
    });
});
router.post('/user',Authentication,(req,res)=>{
    console.log(req.body);

    let newUser={
        id: user.length+1,
        ...req.body,
    };
    user.push(newUser);
    res.status(201).json({
        message:"user created successfully",
        newUser
    });
});


    router.put("/user/:id",(req,res)=>{
        let id=parseInt(req.params.id);
        let {name,password}=req.body;
        let userIndex=user.findIndex(u=>u.id===id);    // user.some()  returns true or false  |||  user.find()  returns the object itself or undefined. |||  user.findIndex()  returns the index of the object or -1.
        if(userIndex===-1){
            return res.status(404).json({
                message:"user not found"
            });
        }
        let updateUser={...user[userIndex],...req.body};  // spread operator to update the object.
        user[userIndex]=updateUser;
        res.status(200).json({
            message:"user updated",
        });


    });
    router.delete("/user/:id",(req,res)=>{
        let id=parseInt(req.params.id);
      
        let userIndex=user.findIndex(u=>u.id===id);    // user.some()  returns true or false  |||  user.find()  returns the object itself or undefined. |||  user.findIndex()  returns the index of the object or -1.
          const userdeleted=user[userIndex];
        if(userIndex===-1){
            return res.status(404).json({
                message:"user not found"
            });
        }
    
        user.splice(userIndex,1);
        res.status(200).json({
            message:"user updated",
            user:userdeleted
        });
    });




// router.listen(port,(req,res)=>{
//     console.log("server is running on port 3000");
// });
export default router;  