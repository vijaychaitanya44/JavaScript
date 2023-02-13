for(let i=3; i<=10;i++ ){
    console.log("Loops Demo" +i)
}
/*
for (let x=10;x>=0;x--){
    console.log("Reduce DEmo" +x);
}
*/
let y=10;
for(;y<=100;y=y+10){
    console.log("10 Table:"+y);
}

let z= 100;
for(;z>=17;){
    console.log("15 reduce : "+z);
    z=z-15
}


let arrz=[34,55,23,51,56,"Vijay", false,undefined,10.89]

for(let k=0; k<arrz.length;k++){
console.log(arrz[k]);
}

arrz.forEach(element =>{
    console.log("using of element: ",element)
})


for(let myArr in arrz){
    console.log("using for of",myArr);
}


let fname = "Selenium Webdriver"

for(x of fname){
    console.log(x);
}

let obj={
    "Name":"Vijay",
    Age:32,
    Pstatus: false
}


for(let q in obj){
console.log(q);
console.log(obj[q]);
}

