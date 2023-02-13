var fname = "Vijay"
var fname = "Chaitanya"
console.log(fname);

let lname ="Round"
lname ="Table"
console.log(lname);

const k = "Cool"
// c = "bool"
console.log(k);

console.log("***********************************************");
for(var x =0;x<5;x++)
{
    console.log(x);             // Outside block level
}

console.log("outside value is ",x);
console.log("***********************************************");


for(let y =0;y<5;y++)
{
    console.log(y);             // Block Level
}

//console.log("outside value is ",y);
console.log("***********************************************");

/*
for(const z =0;z<5;z++)
{
    console.log(z);             // Fails at increasing the z values
}

console.log("outside value is ",z);

console.log("***********************************************");
*/
var a
let b
const c = 40

console.log(a);
console.log(b);
console.log(c);


console.log(`*******************VAR****************`);
var greeting1= "Good Morning"
if(true)
{
    var greeting1="Good evening"
    console.log(greeting1);
}
console.log("Outside if condition ",greeting1);
console.log(`*******************LET****************`);

let greeting2= "Good Morning"
if(true)
{
    let greeting2="Good evening"
    console.log(greeting2);
}
console.log("Outside if condition ",greeting2);
console.log(`*******************CONST****************`);    

const greeting3= "Good Morning"
if(true)
{
    const greeting3="Good evening"
    console.log(greeting3);
}
console.log("Outside if condition ",greeting3);



