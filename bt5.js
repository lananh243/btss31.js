function check(arr,n) {
    let childArray = [];
    for(let i=0; i<arr.length; i += n){
        let child = arr.slice(i,i + n);
        childArray.push(child);
    }
    return childArray;
}
console.log(check(["a", "b", "c", "d"],2));
console.log(check(["a", "b", "c", "d"],3));