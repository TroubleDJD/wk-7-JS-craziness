













console.log("codeAlong:"); 


/*1*/
let ages = [3, 9, 23, 64, 2, 8, 28, 92, 100];
    console.log("Ages:", ages);
    let minusAge = ages[ages.length - 1] - ages[0];
    console.log("minusAge", minusAge);

ages.push(100);
    console.log("Ages after pushing a new value", ages);
    let minusAgePush = ages[ages.length - 1] - ages[0];
    console.log("minusAge", minusAgePush);

let sumOfAges = 0;
for(let i = 0; i < ages.length; i++){
    console.log(i, "Test");
sumOfAges += ages[i]
console.log("index:", i, "sumOfAges:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average", average);




/*2*/let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalChars = 0;
for (let i = 0; i < names.length; i++) {
// console.log(i, "Test");
 totalChars += names[i].length;
 console.log("index:", i, "name:", names[i], "totalChars:", totalChars);  
}
let averageName = totalChars / names.length;
console.log("Average of Names:", averageName);

/*2b*/
let concatNames = "";
for (let i = 0; i < names.length; i++) {
    //console.log(i, "test");
concatNames = concatNames.concat(names[i] + " ")
console.log("Names concatenated", concatNames);
}

/*3*/
console.log("Last element of ages array:", ages[ages.length - 1]);

/*4*/
console.log("First element of ages array:", ages[0]);

/*5*/
let nameLengths = []; 
for (let i = 0; i < names.length; i++) {
//console.log(i, "Test");
nameLengths.push(names[i].length)
console.log("Name lengths array:", nameLengths);
}
/*6*/
let charsTotal = 0;
for (let i = 0; i < nameLengths.length; i++){
    charsTotal += nameLengths[i]
    console.log("CharsTotal:", charsTotal);
}
/*7*/
function concatWords(word, n) {
    console.log("Word Par:", word, "n Par:", n);
    let concat = word.repeat(n);
    console.log(concat);
}
concatWords("Hello", 3);

/*8*/
function fullName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    console.log(fullName);
}
fullName("David", "Duncan")

/*9*/
let numbers1 = [100,200,300,400]
let numbers2 = [1,2,3,4]

function sumNumbersArray(array){
    let total = 0;

    for (let i = 0; i < array.length; i++) {
       // console.log(i, "Test");
       total += array[i]
       console.log("Total:", total);
    }
    if (total > 100) {
        console.log("Total:", total, true);
    } else{
        console.log("Total", total, false);
        return false
    }
}
sumNumbersArray(numbers2)

/*10*/
function calculateNumbersAverage(array){
    let total = 0

    for (let i = 0; i < array.length; i++){
        //console.log(i, "Test");
        total += array[i]
        console.log("calculate Function, total:", total);
    }
    let average = total / array.length;
    console.log("Average of numbers:", average);
    return average;
}
calculateNumbersAverage(numbers1);

/*11*/

let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 99];

function twoAverages(array1,array2){
    console.log("Parameters:", array1, array2);
    let total1 = 0;
    let total2 = 0;
for (const number of array1) {
    total1 += number
    console.log("Current number:", number, "Total1:", total1);
}
for (const number of array2){
    total2 += number;
    console.log("Current number:", number, "Total2:", total2);
}
let average1 = total1 / array1.length;
let average2 = total2 / array2.length;

console.log("Averages", average1, average2); 

if (average1 > average2){
    console.log(true);
    return true 
} else if (average1 < average2){
    console.log(false);
    return false;
} else {
    console.log("Numbers are equal");
}
}
twoAverages(numbers3, numbers4);

/*12*/

function willBuyDrink(isHotOutside, moneyInPocket){
console.log("Parameters", isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log("Buy a drink?", buyDrink);
return buyDrink;
}
willBuyDrink(true, 11)

/*13*/
function isPalindrome(word) {
    for (let i = 0, j = word.length - 1; i < word.length || j > 0; i++, j--) {
        if (word[i] !== word[j]) return false;
    }
return true;
}
console.log(isPalindrome("radar"));



