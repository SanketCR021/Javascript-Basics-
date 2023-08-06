/////   Array  Methods  //////////////////////////////////////////

////// 1 = forEach()  method

// it runs on an array and takes input as a callback function and works accordingly
// in the callback function there should be two parameters 1st is the NUMBER and 2nd is the INDEX of that number in the array

const arr = [4, 6, 8, 9]

function myFunc(number, index){  // it will be the callback (annonymus ) function
    console.log(`The index is ${index} and value is ${number}`)
}


// it takes myFunc as an input function (annonymus function) and perfom the tasks
arr.forEach(myFunc)  
// The index is 0 and value is 4 
// The index is 1 and value is 6 
// The index is 2 and value is 8  
// The index is 3 and value is 9


// this takes input as an annonymus function directly declared during calling
arr.forEach(function(number, index){ 
    console.log(`The value is ${number} and its index is ${index}`)
})
// The value is 4 and its index is 0
// The value is 6 and its index is 1
// The value is 8 and its index is 2
// The value is 9 and its index is 3

arr.forEach(function(number){
    console.log(number*3);  // 12  18  24  27
})

const users = [
    {firstName : "Eren", age :"17"},
    {firstName : "Naruto", age :"16"},
    {firstName : "Itachi", age :"21"},
    {firstName : "Obito", age :"30"}
]

for (let user of users)
{
    console.log(user.firstName)  // Eren Naruto Itachi Obito
}

users.forEach((user) => {  // arrow function as annonynus
    console.log(user.firstName)  // Eren Naruto Itachi Obito
});
///////////////////////////////////////////////////////////////////////

////// 2 = map()  method

// it also takes callback function as an input or an annonymus function and returns a new array in answer
// in the callback function there should be two parameters 1st is the NUMBER and 2nd is the INDEX of that number in the array just like the forEach method

const numbers = [5, 2, 8, 3, 5, 7]

const square = function(number){  // this will the callback function declared as function expression
    return number * number;
}

const newArr = numbers.map(square) // it takes 'square' as a callback function which returns values and is stored in "newArr" itrativly

console.log(newArr)   // (6) [25, 4, 64, 9, 25, 49]

const newArr2 = numbers.map(function(number){  // as annonumus function
    return number * number;
})
console.log(newArr2)  // (6) [25, 4, 64, 9, 25, 49]



const newArr3 = numbers.map(function(number, index){  //annonumus function taking two parameters
    return `index : ${index} , square : ${number * number}`;
})
console.log(newArr3)  
//(6) ['index : 0 , square : 25',    'index : 1 , square : 4',    'index : 2 , square : 64', 'index : 3 , square : 9',     'index : 4 , square : 25',      'index : 5 , square : 49']


const userNames = users.map((user) => {  // arrow function as annonymus function
    return user.firstName;
})
console.log(userNames)  // (4) ['Eren', 'Naruto', 'Itachi', 'Obito']

/////////////////////////////////////////////////////////////////////

////// 3 = filter()  method

// it also takes callback function as an input or an annonymus function and returns a new array in answer but the callback function must have a boolean values
// matlab agar callback value true rahi to new array me vo value store hogi nai to nai hogi
// in the callback function there should be two parameters 1st is the NUMBER and 2nd is the INDEX of that number in the array just like the forEach method

const nums = [5, 2, 8, 3, 10, 6, 5, 7] 

const isEven = function(number){  // function expression as a callback function
    return number%2 === 0;
}

const evenNumbers = nums.filter(isEven)
console.log(evenNumbers)    // (4) [2, 8, 10, 6]


const oddNUmbers = nums.filter(function(number){  
    return number%2!== 0;
})
console.log(oddNUmbers)   //  (4) [5, 3, 5, 7]

/////////////////////////////////////////////////////////////////////

////// 4 = reduce()  method

// in this case the sum is stored in accumulator by repeatedly adding the currentValue which iterate over the arrray
const sum1 = nums.reduce((accumulator, currentValue) => {  // arrow function as callback for reduce 
    return accumulator + currentValue;
})
console.log(sum1)  // 46


const sum2 = nums.reduce((accumulator, currentValue) => {  
    return accumulator + currentValue;
}, 100)  // we are giving intial value of accumulator as 100
console.log(sum2)  // 146


const userCart = [
    {productID : 1, productName : "Refridgrator", price : 55000},
    {productID : 2, productName : "Mobile", price : 5500},
    {productID : 3, productName : "Laptop", price : 60000},
    {productID : 4, productName : "T.V.", price : 30000},
]

const totalPrice = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0)

console.log(totalPrice)  // 150500

/////////////////////////////////////////////////////////////////////

////// 5 = sort()  method

// sort method mutate or make changes in the original array. previos methods did not chande the original structure of the array
// sort method defaultly sort the array accoring to the ASCII value of the array elements

const user_names = ["sanket", "naruto", "eren", 'itachi',"jiraya", "Sanket", "Jack"]
user_names.sort();
console.log(user_names)  //['Jack', 'Sanket', 'eren', 'itachi', 'jiraya', 'naruto', 'sanket']

const temp = [1 , 56 , 8000, 540, 23, 0, 9]
temp.sort()
console.log(temp)  // (7) [0, 1, 23, 540, 56, 8000, 9]   default sort according to ASCII values

temp.sort((a, b) => {
    return a-b;       // INCREASING order
})
console.log(temp)  // (7) [0, 1, 9, 23, 56, 540, 8000]  // proper sort using callback function

temp.sort((a, b) => {
    return b-a;       // DECREASING order
})
console.log(temp)  // (7) [8000, 540, 56, 23, 9, 1, 0]


const products = [
    {productID : 1, productName : "prod_1", price : 5500},
    {productID : 2, productName : "prod_2", price : 500},
    {productID : 3, productName : "prod_3", price : 120},
    {productID : 4, productName : "prod_4", price : 60000},
    {productID : 5, productName : "prod_5", price : 12000},
]

const lowToHigh = products.slice(0).sort((a, b) => { // cloning the products array and sorting
    return a.price - b.price;
})
console.log(lowToHigh)
//  0 : {productID: 3, productName: 'prod_3', price: 120}
//  1 : {productID: 2, productName: 'prod_2', price: 500}
//  2 : {productID: 1, productName: 'prod_1', price: 5500}
//  3 : {productID: 5, productName: 'prod_5', price: 12000}
//  4 : {productID: 4, productName: 'prod_4', price: 60000}


const highToLow = products.slice(0).sort((a, b) => { // cloning the products array and sorting
    return b.price - a.price;
})
console.log(highToLow)
//  0 : {productID: 4, productName: 'prod_4', price: 60000}
//  1 : {productID: 5, productName: 'prod_5', price: 12000}
//  2 : {productID: 1, productName: 'prod_1', price: 5500}
//  3 : {productID: 2, productName: 'prod_2', price: 500}
//  4 : {productID: 3, productName: 'prod_3', price: 120}

/////////////////////////////////////////////////////////////////////

////// 6 = find()  method

// it returns a particular element from an array accoring to the callback fuunction defined 
// callback function shold return boolea value and this metod will terminate after first occurance

const animals = ["tiger", 'lion', "dog", "cat", "monkey"]

const required1 = animals.find((animal) => {
    return animal.length === 3;   // callback function will chect weather the length of         string  is 3 or not
})
console.log(required1)  // dog

const required2 = animals.find((animal) =>  animal.length === 10);   // callback function will chect weather the length of string  is 10 or not  (shorthand arrow function as callback functin)
console.log(required2)  // undefined


const userData = [
    {userId : 1, firstName : "Eren", age :"17"},
    {userId : 2, firstName : "Kakashi", age :"16"},
    {userId : 3, firstName : "Jiraya", age :"21"},
    {userId : 4, firstName : "Madara", age :"1000"},
    {userId : 5, firstName : "Obito", age :"30"}
]

let  required3 = userData.find((user) =>  user.userId === 4); 
console.log(required3)  // {userId: 4, firstName: 'Madara', age: '1000'}

/////////////////////////////////////////////////////////////////////

////// 7 = every()  method

// it takes a callback function which has a boolean output and checks it on every elemnt of the array and returns a final boolean value

const numArr = [2, 4, 6, 8, 10]

let ans = numArr.every((number) => {  // callback function to check number is even or not
    return number % 2 === 0;
})
console.log(ans)   // true   (final value)

const numArr2 = [2, 4, 9, 8, 10]
ans = numArr2.every((number) => number % 2 === 0)
console.log(ans)   // false  (final value)


let val = userData.every((user) => user.age < 50)
console.log(val)   // false  (as "Madara has age 1000")

/////////////////////////////////////////////////////////////////////

////// 8 = some()  method

// it takes a callback function which has a boolean output and checks it on every elemnt of the array and returns a final boolean value. If atleast one element will return true in callback function the the overall value returned will be true

let val1 = numArr.some((number) => number % 2 !== 0) // callback function will check if any element is odd at least 1 element
console.log(val1)   // false


let val2 = numArr2.some((number) => number % 2 !== 0)
console.log(val2)  // true  (as 9 is odd)


console.log(userData.some((user) => user.age > 100))   // true  (as "Madara has age 1000")  

/////////////////////////////////////////////////////////////////////

////// 9 = fill()  method

// it is used to fill or initialize any array with a particular value and it is use to update to a certain range of elements in the array by any value

const myarray = new Array(10)
console.log(myarray)     // (10) [empty × 10]
myarray.fill(0)
console.log(myarray)  // (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


// replacing values of "array360" from index 2 to 5 by value '-1'
const array360 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
array360.fill(-1, 2, 6)   // Syntax ==   ( value , starting index , ending index +1 )
console.log(array360)     // (9) [1, 2, -1, -1, -1, -1, 7, 8, 9]

/////////////////////////////////////////////////////////////////////

////// 10 = splice()  method

// this is used to add or delete or both in between any indexex in the array
// Syntax == ( starting index , delete count , insert )

let myArr = ['item1', 'item2', 'item3', 'item4', 'item5']

// delete operation
const deletedItems = myArr.splice(1, 2)   // starting at index 1 and deleting 2 element
console.log(myArr)   // (3) ['item1', 'item4', 'item5']
console.log(deletedItems)   //  ['item2', 'item3']


// insert operation
myArr.splice(1, 0, 'newitem1')   //  starting at index 1 and deleting 0 elements and inserting "newiem1"
console.log(myArr)   // (4) ['item1', 'newitem1', 'item4', 'item5']


myArr = ['item1', 'item2', 'item3', 'item4', 'item5']
// deletion and insertion
myArr.splice(1, 2, "newitem1", "newitem2")
// at index 1 deleting two elements and adding "newitem1", "newitem2"
console.log(myArr)  // (5) ['item1', 'newitem1', 'newitem2', 'item4', 'item5']