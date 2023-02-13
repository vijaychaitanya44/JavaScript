console.log(10/2);
console.log(10/2.5);
console.log(10/0);
console.log(10.0/0.0);
console.log("Vijay"/0);
console.log(10/null);
console.log(10/undefined);


let result = 10 + 100 + "Vijay"
console.log(result);


let result1= "Vijay"+20+30
console.log(result1);

let result2= "5"+5
console.log(typeof result2);
console.log(result2);


console.log(result2/5);

let result3= "5"-5;
console.log(result3);

console.log(10/true);
console.log(10/false);

console.log("5"*5)
console.log("Vijay"*5);

let num1= "50"
let num2 = 50

if (num1==num2)
{
    console.log(`numbers ${num1},${num2} matched`);
}
else{
    console.log(`numbers "DONT" match`);
}


if(num1===num2)
{
    console.log(`numbers ${num1},${num2} matched`); 
}
else{
    console.log(`numbers "DONT" match`);
}

console.log(`***********************`)


console.log(10>4);
console.log(16<9);
console.log(16>=16);
console.log(10>5 && 5<20);
console.log(10>5 && 13<5);
console.log(10>8 || 10<5);


console.log("**********************")

let str1 = "This is JS"
let str2 = "JS"
let str3 = "This is js  "

if(str1.includes(str2)){
    console.log("PASS");
}
else{
    console.log("Fail");
}

if(str1.toUpperCase()==str3.toUpperCase()){
    console.log("PASS");
}
else{
    console.log("Fail");
}

console.log("**********************************");
let num3 = 10
num3 = num3+5
console.log(num3);
num3+=5
console.log(num3);
num3*=5
console.log(num3);
num3/=5
console.log(num3);