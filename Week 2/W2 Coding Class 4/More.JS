const myString = 'i!a!m!a!s!t!r!i!n!g!'
for(i=0; myString.length; i++) {
    let A = myString[i];
    if (A === '!'){
        continue;
    }
    console.log(A)
}

function myFirstFunction() {
    console.log ('I just called my first function')
}
myFirstFunction (); // This is a function call