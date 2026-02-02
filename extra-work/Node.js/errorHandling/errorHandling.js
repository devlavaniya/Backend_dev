// console.log("Starting the application...");
// const {error}=require("console");
const http=require("http");
// try {
//     throw new Error("An unexpected error occurred!");
// } catch (error) {
//     console.log("Error caught:", error.message);
// }
// console.log("Application finished.");

const server=http.createServer((req,res)=>{
    console.log(req.url);
    try{
        throw new Error("Server encountered an error!");
    } catch (error) {
        console.log("Error caught:", error.message);
    }
    res.end("Hello World");
});
server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});