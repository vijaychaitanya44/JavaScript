let obj1={}
console.log(typeof obj1);

let obj2={
    "Name":"Vijay",
    "Address":"Banglore",
    "Phone":986372391,
    status: false
}

console.log(obj2);
console.log(obj2.Name);
console.log(obj2["Phone"]);
console.log(obj2["status"]);

console.log(obj2.Salary);

obj2.Salary=1000
obj2.Exp = 10
console.log(obj2);

delete obj2.Exp
console.log(obj2);


console.log("____________________________________________");

let obj3 ={
    "State":"KA",
    "City": "Banglore"
}

obj2.fullAddress = obj3;
obj2.MyFamily=["H1","H2","H3"]
console.log(obj2);

console.log(obj2.fullAddress.State);
console.log(obj2.MyFamily[2]);
console.log("____________________________________________");

obj2.myFunction = function()
{
    console.warn("Hello from function");
} 
console.log(obj2);
obj2.myFunction();

console.log("____________________________________________");


let vijay = obj2
console.log(typeof vijay);

delete vijay.Salary
console.log(obj2);

obj2.Fruit = "Apple"
console.log(vijay);
