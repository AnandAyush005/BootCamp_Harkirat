
function even(arr){

    arr = arr.filter(num => num%2 === 0);
    return arr;
}

let arr = [1,5,6,3,2,4,8,9,7,5,8,6,3,989,85,];

arr = even(arr);

console.log(arr);

