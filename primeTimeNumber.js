function primeNumber(num) {
    let isPrime = true;
    if (num === 1) {
        console.log("1 is not a prime number.");
    }
    else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(primeNumber(110))