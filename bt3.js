function confirmEnding(str, substring) {
    let result =str.endsWith(substring);
    return result; 
}
console.log(confirmEnding("Hello world", "world")); 
console.log(confirmEnding("Hello world", "orld")); 
console.log(confirmEnding("Hello world", "world2")); 

