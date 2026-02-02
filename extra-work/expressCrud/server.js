import express from 'express';
import fs from 'fs';
const app = express();
const PORT = 3000;
app.use(express.json());  // Middleware to parse JSON bodies. used in POST requests.
let  logfun=(req,res,next)=>{
    let logText=`timestamp: ${new Date().toString()} url ${req.url} method ${req.method} \n`
    fs.appendFileSync("log.txt",logText);
    console.log(logText);
    next();
}
app.use(logfun);
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

app.get('/', (req, res) => {
    res.send(200).json({
        message: "Server is running"
    });
});

app.get('/user',(req,res)=>{
    res.status(200).json({
        message:"all users",
        user,
    });
});
app.post('/user',(req,res)=>{
    console.log(req.body);
    const {name,Password}=req.body;
    if(!name || !Password){
        return res.status(400).json({
            message:"name and password are required"
        });
    }
    if(Password.length<6){
        return res.status(400).json({
            message:"password must be at least 6 characters long"
        });
    }

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


    app.put("/user/:id",(req,res)=>{
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
    app.delete("/user/:id",(req,res)=>{
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





app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
