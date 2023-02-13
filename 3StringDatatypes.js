let fname = "  My Name is Vijay  "
console.log(fname.length);

console.log(fname[1]);

console.log(fname.includes("Name"));
console.log(fname.includes("name"));

console.log(fname.startsWith("My"));
console.log(fname.endsWith("Vijay")); 

let arr=fname.split(" ")

console.log(arr[3]);

console.log(fname.toUpperCase());
console.log(fname.toLowerCase());

console.log(fname.trim());

console.log(fname.replace("Vijay","Sujay"));
console.log(fname);

let finalMsg = "Total price is 200 USD"

let value = finalMsg.split(" ")[3]

console.log(typeof value);

let price = parseInt(value);

console.log(price);
console.log(typeof price);


if (price==200){
    console.log("Pass");
}
else{
    console.log("Faile");
}







