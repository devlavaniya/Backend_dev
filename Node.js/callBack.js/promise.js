function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User logged in");
            resolve();
        }, 2000);
    })
}
login()
    .then(()=>userDetail())
    .then(()=> {
        console.log("All operations completed");
    }) 
    .catch(()=>{
        console.log("Error occurred");
    })

function userDetail(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("User details fetched");
            resolve();
        }, 1000);
    })
}