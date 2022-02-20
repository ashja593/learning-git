//arrays
const item_list = ["kina", "paua", "tamure", "tuatua", "toheroa", "kutai", "tupa"];
console.log(item_list);

console.log(item_list[5]); //the value [5] refers to the 5th element in the list


const fruits = ["apples", "bananas", "pears"];
for (let i = 0; i< 3; i++) { //logs all the 3 elements at once
    console.log(i);
    console.log(fruits[i]);
}

const myFavNums = [5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < myFavNums.length; i++) {
sum = sum + myFavNums[i];
}

const favRecipie = {
    title: 'Coffee',
    servings: 2,
    ingredients: ['coffee', 'water', 'milk'],
};
console.log (favRecipie, favRecipie.ingredients.length);

favRecipie.ingredients.push('sugar');
console.log(favRecipie)

