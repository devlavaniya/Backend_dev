

const copy={
    id:1,
    name:"Jagdish",
    Password:"owner12",
    address:"India",
    department:"IT"

};

const clone={...copy};    // spread operator to clone the object.
console.log("clone",clone);  

const{id,name,...rest}=copy;    // rest operator to extract the remaining properties except id and name.  

console.log("rest",rest);


//upadte the address and department using rest spread operator
const updated={...copy,address:"USA"};  // copy the entire object except address and update the address to USA.
console.log("updated",updated);