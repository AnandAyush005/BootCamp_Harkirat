function greet(user){

    console.log("Hi " + user.name + ", I think your age is : " + user.age);

    if(user.age >= 18) console.log("You are elidigible to vote");
    else console.log("You are not elidigible to vote");
}

let user1 = {
    name : "Ayush anand",
    age : 17
}

let user2 = {
    name : "Anand kumar",
    age : 45
}

greet(user1);
greet(user2);