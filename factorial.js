function firstFactorial(n){
    if(n == 0 || n == 1){
        return 1;
    } else {
        return n * firstFactorial(n-1);
    }
}

console.log(firstFactorial(8));


