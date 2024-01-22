function largestOfArrs(...arr) {
    let result = [];
    for(let i=0; i<arr.length; i++){
        let max = Math.max(...arr[i]);
        result.push(max);
    }
    return result;
}
let result1 = largestOfArrs([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]);
console.log(result1); 

let result2 = largestOfArrs([1, 2, 3, 4], [5, 1, 2, 9]);
console.log(result2);

let result3 = largestOfArrs();
console.log(result3);