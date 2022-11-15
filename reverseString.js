function reverseString(str) {    
    const itemsArray = [...str]
    
    itemsArray.reverse();
    // console.log(items); 
    let text = itemsArray.join("");
    
    console.log(text)
}

function reverseStringPeter (str) {
    console.log([...str].reverse().join(""));
}

reverseString("coderbyte");
reverseString("I Love you");
reverseString("Olubusola");

console.log("NOW PETER's OWN")
reverseStringPeter("coderbyte");
reverseStringPeter("I Love you");
reverseStringPeter("Olubusola");



