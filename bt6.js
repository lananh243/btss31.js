
function fakeFind(arr, fn) {
    for(let i=0; i<arr.length; i++){
        let test = fn(arr[i]);
        if(test === true){
            return arr[i];
        }
    }
}
let arr = [1,2,3,4];
let rest1 = fakeFind(arr, function(e){
    if(e%2 === 0){
        return true;
    }else{
        return false;
    }
});
console.log(rest1);
let rest2 = fakeFind(arr, function(e){
    if(e%2 !== 0){
        return true;
    }else{
        return false;
    }
});
console.log(rest2);