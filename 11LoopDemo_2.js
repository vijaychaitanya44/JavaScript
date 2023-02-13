
let sum =5
while(sum<15){
    console.log("Heloo 15" +sum);

    if(sum===10){
        break
    }
    sum++
}

for(let x=0;x<=10;x++){

    if(x===4){
        continue
    }
    console.log("Pint value "+x);
}

let y=100
do{
    console.log("value is "+y)
    y++
    
}while(y<20);