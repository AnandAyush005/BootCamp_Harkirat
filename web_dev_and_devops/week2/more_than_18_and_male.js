
function adultMales(users){

    let male = users.filter(user => user.age >=18 && user.gender == "Male");
    return male;
}


let user = [
    {
        name : "Ayush",
        age : 19,
        gender : "Male"
    },{
        name: "anand",
        age : 17,
        gender : "Male"
    },
    {
        name : "Pinky",
        age : 21,
        gender : "Female"
    }
]

let males = adultMales(user);

console.log(males);
