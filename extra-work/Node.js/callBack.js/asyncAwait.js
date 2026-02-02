function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User logged in");
            resolve();
        }, 2000);
    })
}
function userDetail(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("User details fetched");
            resolve();
        }, 1000);
    })
}
function logOut(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User is logged out");
            resolve();
        },4000);
    })
}

async function demo(){
    try{
        await login();
        await userDetail();

    }
    catch(err){
        console.log("Error occurred", err);
    }
    
    
}
async function demo1(){
    try{
        await logOut();
    }
    catch(err){
        console.log("Error occurred", err);
    }
    console.log("All operations completed");
}
demo();
demo1();
