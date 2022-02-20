function myFirstFunction () {
    console.log ("I just called my first function");
}

myFirstFunction (); //This is how you "call" the function

function sum(num1, num2) {
    return num1 + num2;
}

sum (15,15);

console.log(sum(15,15))

function check(string){
    if (string.length ===0) {
        console.log ('false');
    }
    else {
        console.log ('true')
    }
}

check ('testing...')
check ("")


//arrow strings
const combinedString = (firstStr, secondStr) => {
    return firstStr+' '+secondStr;
}
console.log(combinedString('Arrow','String'))
