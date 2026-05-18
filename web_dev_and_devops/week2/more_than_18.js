
function adult(users){

    let adultUsers = users.filter( user => user.age >= 18);

    return adultUsers;
}

let user = [
    {
        name : "Ayush",
        age : 19
    },{
        name: "anand",
        age : 17
    }
]

let adultUsers = adult(user);

console.log(adultUsers);

