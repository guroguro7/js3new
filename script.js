'use strict'
 

//h/w
function sum(...numbers){
let newSum = 0;

for (let items of numbers) {
if (items > 0) {
// newSum = newSum + item;
newSum += items;
   }
 }
 return newSum;
}


let result = sum(12, 100, -5, -4, 25, -35)

console.log(result);

//2
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
        return `${obj.firstname} ${obj.lastname}`
    }
    return false 
}

let resultFnc = printName(user);
let resultFnc2 = printName(user2);
console.log(resultFnc); 
console.log(resultFnc2);



//3
function getMaxValue(...arrayNumbers) {
let maxvalue = 0;
for (let element of arrayNumbers) {
    if(element > maxvalue) {
        maxvalue = element;
    }

}

return maxvalue;
}


let resultMaxValue = getMaxValue(3, 105, 14, 250, 36)
console.log(resultMaxValue);

//4
function oddOrEven(num) {
    return num % 2 == 0 ? "this number is even" : "this number is odd";
}
console.log(oddOrEven(4)); 

//5
let array = [1,2,3,4,5]; 


for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

//6
let i = (age) => (age < 20 ? "adult" : "underage");
console.log(i(20));