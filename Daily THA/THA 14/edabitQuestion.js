// Create a function that takes two numbers as arguments and return their sum.
function addition(a, b) {
	return a+b;
}

// Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
	return age*365;
}

// Create a function that takes an array containing only numbers and return the first element
function getFirstValue(arr) {
	return arr[0];
}

// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
function bitwiseAND(n1, n2) {
	return n1&n2;
}

function bitwiseOR(n1, n2) {
	return n1|n2;
}

function bitwiseXOR(n1, n2) {
	return n1^n2;
}

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
	return (num*(num+1))/2;
}

// Create a function that takes length and width and finds the perimeter of a rectangle.
function findPerimeter(length, width) {
	return 2*(length+width);
}

// Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
	let cnt = 0;
	for(var i=0; i<arr.length; i++){
		if(arr[i] === true) cnt++;
	}
	return cnt;
}
// or using 
function countTrue(arr) {
    return arr.filter(x=>x==true).length
}

// Write a function redundant that takes in a string str and returns a function that returns str.
function redundant(str) {
    return function(){
        return str;
    };
}

// Create a function that finds the highest integer in the array using recursion.
function findHighest(arr) {
	if(arr.length == 1) return arr[0];
	return Math.max(arr.shift(), findHighest(arr));
}

// Create a function that concatenates n input arrays, where n is variable.
function concat(...args) {
	return args.flat();
}

// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
//Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
function compact(arr) {
	return arr.filter(Boolean);
}

//In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
//Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.

function possibleBonus(a, b) {
	if((b-a)>0 && (b-a)<7) return true;
	else return false;
}
