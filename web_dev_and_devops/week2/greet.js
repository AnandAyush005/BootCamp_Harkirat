function greet(user){

    console.log("Hi " + user.name + ", I think your age is : " + user.age);
}

let user1 = {
    name : "Ayush anand",
    age : 19
}

let user2 = {
    name : "Anand kumar",
    age : 45
}

greet(user1);
greet(user2);