function sayHello(){
    console.log("Hello JS");
}

console.log( sayHello());

function showName(fname, lname)
{
    return fname+" "+lname
}

console.log(showName("Vijay","Chaitanya"));
console.log(typeof showName);
console.log("*********************************************************");
let myfunc =function f1()
{
    console.log("I am f1");
     return 30
}

let result =myfunc()
console.log(result);

console.log(typeof myfunc);

console.log("*********************************************************");

let myfuncNew = function (n1,n2,n3)
{
    console.log("I am f2");
    return n1+n2+n3
} 

console.log(myfuncNew(12,24,36));

//add function into object
console.log("*********************************************************");

let myObj={
    "Name":"Vijay",
    f3:function(){
        console.log("I am inside an object");
    }
}

myObj.f3()
console.log("*********************************************************");

//add function to Array
let arr1=[1,"Vijay",f1=function()
    {
    console.log("I am inside object");
    } 
]

arr1[f1]

let y = arr1[2]
y()
console.log("*********************************************************");

//Arrow function

let z= ()=> 
{
    console.log("This is f3 function")
}
z()

let a= (x1,x2)=>
{
    console.log("This X1+X2");
    return x1+x2
}

console.log(a(5,6));

let myAddress =()=>  console.log("Banglore");
myAddress()

let myFulAddress =(street,road)=> console.log(`${street}, ${road}, Banglore`); 
myFulAddress("5th cross","double road")

let arrx=[1,2,5,"vijay", true, 45.55]


