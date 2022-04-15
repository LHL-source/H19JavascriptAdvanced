/*H19 exercise array method part 2 vragen F en G
Vraag F:works ? y good job
In an array of integers. Write a JavaScript function that checks if ALL values ​​in the array are below 100, and return True or False.
Testdata:console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false 

Vraag G: works ? not yet
Bonus! The last exercise is a bit more challenging. 
Use Google and be a little rowdy (maybe copy a piece of code). 
In an array of integers. Write a JavaScript function that adds all
 the values in the array and returns the sum total. Use the .reduce method. 
 And really, use Google.
 
 Testdata:
 console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118

*/
/*-------------------------------------------
/*uitwerking vraag G*/

/* vr G nu in vorm van ARROW function*/
const array1 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
//console.log("test1 ", array1);/*works ? */
let initialValue = 0;
const somTotaal = (previousValue, currentValue) => {
    return previousValue + currentValue


}
initialValue;
/*to invoke a function*/
//array1.reduce(somTotaal);
/*to console.log the eindresultaat:1118*/
console.log(array1.reduce(somTotaal));
//console.log(somTotaal);


/*opdr G uitwerking volgens MDN, works? y good job*/
/*const array1 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const initialValue = 0;
const somTotaal = array1.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
}, initialValue);

console.log(somTotaal);*/



/*----------------------------------------*/
/*uitwerking vr E: works? yes good job */
//const array1 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
//console.log("test1: ", array1); /*works? y*/


//const belowHundred = (currentValue) => {
//return currentValue < 101;
/*};*/

//console.log(array1.every(belowHundred));
//console.log(belowHundred(99));/*works ? y*/