let user = {
    firstname: "giorgi",
    lastname: "saakadze",
    age: 32,
    isloggedin: true,
};
let user2 = {
    firstname: "ana",
    lastname: "saakadze",
    age: 32,
    isloggedin: true,
};

function printName(obj) {
    if (obj.isloggedin){
        // return user.firstname + user.lastname;
        return '${obj.firstname} ${obj.lastname}'
    }
    return false 
}

let resultFnc = printName(user);
let resultFnc2 = printName(user2);
console.log(resultFnc); 
console.log(resultFnc2);