export function add(a,b){
    return a+b;
}
export function sub(a,b){
    return a-b;
}
export function mult(a,b){
    return a*b;
}
export function div(a,b){
    if(b===0){
        return "Error: Division by zero";
    }
    return a/b;
}

// module.exports={add,sub,mult,div};