/*
Write a function called halfNumber that will take one argument (a number), divide it by 2, 
and return the result
*/
function halfNumber(wholeNumber) {
    const halvedNumber = wholeNumber/2;
    return halvedNumber;
}

const result = halfNumber(3)
console.log ('half of 3 is ' + result)

/*
Write a function (you choose the name) that takes an integer minutes and returns seconds.
*/
function getTimeInSeconds (timeInMinutes) {
    const timeInSeconds = timeInMinutes * 60;
    return timeInSeconds;
}

const userInputMinutes = prompt('Enter the minutes', '3');
const timeInSeconds = getTimeInSeconds(userInputMinutes);
alert(userInputMinutes + ' minutes is '+ timeInSeconds + ' seconds');

let person = {
    firstName : 'Jacob',
    lastName : 'Ashdown'
};
console.log(person.firstName + ' ' + person.lastName);


//This is example of an "object"
const perso = {
    name : "Jacob",
    age : 15,
    heightCM : 184,
}
person.age

/*
Creates a person object containing a firstName, lastName and favoriteNumber,favoriteDay properties.
console.log the object
Add a property called favoriteFood to the object.
console.log the object
Remove the favoriteDay property from the object. Double the value  of the favoriteNumber property.
console.log the object
*/

const person1 = {
    Name : 'Hone',
    famName : 'Heke',
    favNum : 13,
    favDay : 'Sunday',
}
console.log(person1);
person1.favfood = 'Tamure';

console.log(person1);
delete person1.favDay;

person1.favNum = person1.favNum *2;
console.log(person1);
