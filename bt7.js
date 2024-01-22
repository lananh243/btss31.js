function fakeFind(arr, fn) {
    let filteredArr = [];
    for(let i=0; i< arr.length; i++){
        if(fn(arr[i])){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;         
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