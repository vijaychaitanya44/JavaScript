if(10>20){
    console.log("inside If bLock");
}
else{
    console.log("Inisde Else block");
}

let browserName= "Brave"
if(browserName.includes("Chrome")){
    console.log("Chrome started");
}
else if(browserName.includes("firefox")){
    console.log("FF started");
}
else if(browserName.includes("edge")){
    console.log("Edge started");
}
else{
    console.log("only supports FF, Edge, Chrome");
}


let date = new Date().getDay()

console.log(date);
switch (date) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;   
    case 2:
        console.log("Tuesday");
        break;   
    case 3:
        console.log("Wednesday");
        break;   
    case 4:
        console.log("Thursday");
        break;   
    case 5:
        console.log("Friday");
        break;   
    case 6:
        console.log("Saturday");
        break;   

    default:
        console.log("Sorry");
        break;
}