function palindromeTwo(str) {

    const arrayValues = str.split('');

    const reverseArrayValues = arrayValues.reverse();

    const newString = reverseArrayValues.join('');

    if(str == newString) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(palindromeTwo("Noel - sees Leon"));
console.log(palindromeTwo("A war at Tarawa!"))
