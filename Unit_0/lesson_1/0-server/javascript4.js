'use strict'

var users = [
    {
        name: "John Wayne",
        gender: "male"
    },
    {
        name: "Mary Monro",
        gender: "female"
    },
    {
        name: "Charles Bronson",
        gender: "male"
    }
];

const showUsers = () => {
    users.forEach (user => {
        console.log(`user name is ${user.name}`);
    });
};

const addUsers = (name, gender ) => {
    console.log("in addUser");
    var newuserName = name;
    console.log("name " + newuserName);
    var newuserGender = gender;
   
    users.push({name: newuserName, gender: newuserGender});
    
    };
showUsers();
addUsers( "John Doe",  "male");
showUsers();

