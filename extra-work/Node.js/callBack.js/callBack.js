// A function is pass to another function.
// function fun(){
//     console.log("This is a callback function example.");  // callback function
// }

// function save(cb){
//     console.log("Saving data...");           // higher order function
//     cb();
// }
// save(fun);

// let arr=[1,2,3,4,5];
// function printArray(element){
//     console.log(element);
// }
// arr.forEach(printArray);  // forEach is a higher order function and printArray is a callback function.

// arr.forEach((x)=>{
//     console.log(x);        // using anonymous function as callback
// });



function login(cb){
    setTimeout(() => {
        console.log("User logged in");
        cb(); 
    }, 2000);
}
function userDetail(){
    setTimeout(() => {
        console.log("User details fetched");
 
    }, 1000);
}
login(userDetail)