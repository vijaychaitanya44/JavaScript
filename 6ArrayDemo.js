let arr=[10, 20 , 30,'Vijay', true]
console.log(arr);
console.log(arr[1]);

console.log(typeof arr[4]);

console.log(arr.length);

console.log(arr[arr.length-2]);

 arr.push(100);
 console.log(arr);

 arr.unshift("Chaitanya");
 console.log(arr);

 arr.pop();
 console.log(arr);

 arr.shift();
 console.log(arr);
 console.log("_______________________________________________________");
 let arr1=[10, 20 , 30,'Vijay', true]
 let arr2=["Java","JS","Python"]


 arr1.push(arr2);
console.log(arr1);

console.log(arr1[5][2]);
console.log("_______________________________________________________");
let obj1={
    "Name": "Vijay",
    "Lang":"Java"
}

arr1.push(obj1);
console.log(arr1);

console.log(arr1[6].Lang);
console.log(arr1[6]["Name"]);
console.log("_______________________________________________________");


let arr3=[10, 20 , 30,'Vijay', true]

for(let i=0;i<arr3.length;i++){
    console.log(arr3[i]);
}


console.log("_______________________________________________________");

for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

