function sum(n){
    let add = 0;

    for(let i = 1; i<=n; i++){
        add+=i;
    }

    return add;
}

console.log(sum(5));
console.log(sum(6));
