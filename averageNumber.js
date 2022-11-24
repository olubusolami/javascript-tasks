function averageNumber() {
    const num1 = parseInt();
    const num2 = parseInt();
    const num3 = parseInt();
    const average= avg(num1,num2,num3);
    //assign the average value to the variable average 3
    console.log(average) 
}
//complete the function
function avg(x,y,z){
    return (x+y+z)/3
}
console.log(averageNumber(6, 9, 7))