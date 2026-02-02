const express = require('express');
const app = express();
const port = 3000;
const user=require("./data");
app.get("/",(req,res)=>{
    res.send("Welcome to the Home Page");
});
app.get('/user', (req, res) => {
  
  const userId = req.query.id;
    const result=user.find(u=>u.id==userId);

  res.json(result);
});
app.get("/user/page",(req,res)=>{
   const page=req.query.page;
   const limit=req.query.limit;
   const startIndex=(page-1)*limit;
    const endIndex=page*limit;
    const result=user.slice(startIndex,endIndex);
    res.json(result);
});

// app.get("/user/:id",(req,res)=>{
//     const id=req.params.id;
//     const result=user.find(u=>u.id==id);
//     if(result){
//         res.send(result);
//     }
//     else{
//         res.send("User not found");
//     }
// })

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
