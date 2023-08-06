console.log("hello wor")  
var name = "sanket"
console.log(name)
name = "SuperSanket"
console.log(name)

let lastName = "gourkhede"
console.log(lastName)

//  difference between let and var
// var first = "metal"
// var first = "non-metal"     It will work in case of var

// let first = "metal"
// let first = "non-metal"     It will not work in case of let
// first = "non-metal"  

const pi = 3.14     //  Its value cannot be changed throught the code
// pi = 3.16    // gives error
console.log(pi+5)

////////////////////////////////////////////////////////////////////////

//  string indexing 
let st = "Sanket"
console.log(st[2])  // == n
console.log("the length of string is " + st.length)
console.log(Number.MAX_SAFE_INTEGER)       // 9007199254740991

//////////////////////////////////////////////////////////////////////////

// string operation
let str = "    Gladiator     "
console.log(str)
console.log(str.length)     // 18
str.trim()
console.log(str.trim())     // "Gladiator"
console.log(str.trim().length)  // 9
str = str.trim()
console.log(str)

let s = "     M S Dhoni   "
console.log(s)
console.log(s.trim())

console.log(str.toUpperCase())   // GLADIATOR
console.log(s.toLowerCase())     ///  m s dhoni

str = "geeksforgeeks"
console.log(str)
console.log(str.slice(0, 4))    // generate substring form index '0' to index '4-1' ie "geek"
console.log(str.slice(3, 8))   // ksfor
console.log(str.slice(5))      // forgeeks

///////////////////////////////////////////////////////

let age = 17
let num = 45.12
let fname = `Sanket`
let temp
let myvar = null
let mynum = BigInt(45)   // BigInt datatype declaration
let mynum2 = 65n    //  BigInt datatype declaration
// we cannot perform mathematical operations on bigint and int datatype at a same time both variables must be of same datatype

console.log(typeof age)  // number    syntax = typeof_x
console.log(typeof(age))   // number  Syntax  = typeof(x)
console.log(typeof(num))   // number
console.log(typeof fname)  //string
console.log(fname, typeof(fname))  // Sanket string

console.log(typeof true)  // boolean 
console.log(typeof abc)  // undefined
console.log(typeof temp)  // undefined
console.log(typeof mynum)  // bigint
console.log(mynum + mynum2)  // 110n
console.log(typeof myvar)  // null
console.log(typeof null)  // object  (bug in javascript)

// to convert datatypes of variables

 age = age + ""         // (int    ->   string)    2nd method : age = String(age)
 console.log(typeof age)  // string   "17"

let myage = "50"   // string
myage = +myage     // (string   ->   int)     2nd method : myage = Number(myage)
console.log(typeof myage)  // number   50

/////////////////////////////////////////////////////////////////

let str1 = "Sanket"
let str2 = "Gourkhede"
console.log(str1 + " " + str2)   // Sanket Gourkhede

let string1 = "50"
let string2 = "45"
console.log(string1 + string2)   // 5045 (string)
console.log(+string1 + +string2)  // 95 (number)

/////////////////////////////////////////////////////////////////////

// template string
let s1 = 45
let s2 = "Sanket"
let s3 = `My name is ${s2} and my age is ${s1}`
console.log(s3)

/////////////////////////////////////////////////////////////////

//  comparision operators
//     < , > , >= , <= are same as that of other languages returning boolean values

// ===  and == 

let num1 = 7
let num2 = 7
let num3 = 8
let num4 = "7"  // string

console.log(num1 == num2)  // true  
console.log(num1 == num4)  // true
console.log(num1 == num3)  // false
//  == operator checks only the value of the variables not the datatype

console.log(num1 === num2)  // true  
console.log(num1 === num4)  // false
console.log(num1 === num3)  // false
//  === operator checks the value of the variables and the datatype also

console.log(num1 != num2)  // false 
console.log(num1 != num4)  // false
console.log(num1 != num3)  // true
//  != operator checks only the value of the variables not the datatype

console.log(num1 !== num2)  // false  
console.log(num1 !== num4)  // true
console.log(num1 !== num3)  // true
//  !== operator checks the value of the variables and the datatype also

if (num1 > num3)
{
    console.log("num1 > num3")
}
else
{
    console.log("num1 < num2")
}

// Falsy Values : false , 0 , undefined , null , ""

// Truthy Values : true , (1, -1, any number except 0) , "abc"

// Ternary Operator : (statement) = (condition) ? (true operation) : (false operation)

////////////////////////////////////////////////////////////////////////////

// for loops , while loops , do while loop are same asthe normal languages
// switch case , break , continue are also the same

//////////////////////////////////////////////////////////////////////////////

// arrays (reference type == object)

let fruits = ["apple","mango","banana","papaya"]  // string array
let numbers = [1,2,3,4,5,6,7,8,9]  // number array
let mixed = [1,2,3,"sanket", "naruto", null, undefined, 1.56, 0.123, -45]

console.log(fruits)  
console.log(numbers)
console.log(mixed)

console.log(mixed[4], typeof mixed) /// naruto objet

fruits[2] = 'watermelon'
console.log(fruits)

console.log(Array.isArray(fruits))  // true

let obj = {}     // object literal

console.log(typeof fruits)    /// object
console.log(typeof obj)     // object

console.log(Array.isArray(fruits))      // true
console.log(Array.isArray(obj))         // false

//////////////////////////////////////////////////////////////////////////

// methods in array

fruits.push('melon')   /// push at back
console.log(fruits)         // apple mango watermelon papaya melon   

fruits.pop()   /// pop from back and return the item
console.log(fruits)  // apple mango watermelon papaya

fruits.unshift('grape')   /// push at front
console.log(fruits)         // grape apple mango watermelon papaya melon   

fruits.shift()   /// pop from front and return the item
console.log(fruits)  // apple mango watermelon papaya

// push() and pop() are faster as compare to shift() and unshift()

// Cloning or copying of array 

let arr1 = ['item1', 'item2', 'item3']
let arr2 = arr1
let arr3 = ['item1', 'item2', 'item3']

console.log(arr1 === arr2)  // true (as arr2 is a pointer to the original arr1 in its memory)
console.log(arr1 == arr2)  // true (checking only values)
console.log(arr1 === arr3)  // false (as arr3 is a complete new array irrespective of original arr1)
console.log(arr1 == arr3)  //  false

let array1 = ['val1', 'val2']

// 1st Method of copying
let array2 = array1.slice(0)  // fastest    ['val1', 'val2']

//2nd Method
let array3 = [].concat(array1)  //  ['val1', 'val2']

// 3rd method  { Spread Operator = "..."}
let array4 = [...array1]  // ['val1', 'val2']

console.log(array1 === array2)   // false
console.log(array1 === array3)  // false
console.log(array1 === array4)    // false

//  if we want to create a clone array or given array and add some oter elements simultaneously
let array5 = array1.slice(0).concat(['item3','item4'])
let array6 = [].concat(array1, ['item3','item4'])
let array7 = [...array1, 'item3', 'item4']
let superarray = [...array1, ...array2]

console.log(array5)  //  ['val1', 'val2', 'item3','item4']
console.log(array6)  //  ['val1', 'val2', 'item3','item4']
console.log(array7)  //  ['val1', 'val2', 'item3','item4']
console.log(superarray)  //  ['val1', 'val2', 'val1','val2']

// constant array can be mutable

const a1 = ['a', 'b']
a1.push('c')
console.log(a1)   // a, b, c

//   loops in array  (Traversal)
// for and while loops are same as of C++

const anime = ['naruto', 'one piece', 'death note', 'your name']

// --for of-- loop  (similar to for (auto i : arr))  [returns value directly]
const anime2 =[]
for (let i of anime)
    anime2.push(i.toUpperCase())

console.log(anime2)  // NARUTO , ONE PIECE , DEATH NOTE , YOUR NAME

// --for in-- loop           [[returns index]]
const anime3 =[]
for (let j in anime)
    anime3.push(anime[j])  // j will return the index

console.log(anime3)    // 'naruto', 'one piece', 'death note', 'your name'

///////////////////////////////////////////////////////////

// array destructuring (not work on const arrays)  { datatype [x, y, ..] = array-name  }

let vegetables = ['tomato','potato','brinjal','icecream']
// if we want to assin new variables with the values of a given array we use this 

let [vege1, vege2] = vegetables
console.log(vege1)  // tomato
console.log(vege2)  // potato

// scenario 1 == if we want to skip any value while assigning
let [vegie1, , vegie2] = vegetables
console.log(vegie1)  // tomato
console.log(vegie2)  // brinjal

// scenario 1 == if we want to assign some values to variables and rest to a new array
let [vegi1, vegi2, ...vegis] = vegetables
console.log(vegi1)  // tomato
console.log(vegi2)  // pototo
console.log(vegis)  // brinjal , icecream

/////////////////////////////////////////////////////////////////

// object and object literals (maps)  [key value pairs]

const person = {
    name : "Sanket", 
    age : 21,
    city : "Nagpur"
}
console.log(person)   // {name: 'Sanket', age: 21, city: 'Nagpur'}
console.log(person.name) // sanket
console.log(person.age)  // 21

// adding a key value pair
person.gender = "male"  // {name: 'Sanket', age: 21, city: 'Nagpur', gender;'male'}

// we can add array also
person.hobbies = ['playing','gaming','sleeping','anime']
console.log(person)

//  adding and accesing elements by bracket notations

console.log(person['name'])  // Sanket
console.log(person['hobbies'])

person['surname'] = "gourkhede"
console.log(person) //  {name: 'Sanket', age: 21, city: 'Nagpur', gender: 'male', hobbies: Array(4), …}

/// Difference in '.' and '[]' notations

// in '.' notation we cannot store a key named with two words and access it but in '[]' notation it is posible
// person.phone number = 1234567890   (error)
// console.log(person.phone number)   (error)

person['phone number'] = 1234567890
console.log(person['phone number'])  // 1234567890

// if we want to store a key's name from a variable with some value it is possible

const k = "email"
person[k] = "xyz@gmail.com"  // it will store new key's value as 'email' not as 'k'
console.log(person)

// Iteration over objects (--for in--)
const person1 = {
    name : "SanketG", 
    rollno : 60 , 
    city : 'Nagpur' ,
    hobbies : ['playing','gaming','sleeping','anime']}

for (let k in person1)
    console.log(k)        // name  rollno  city  hobbies

for (let i in person1)
    console.log(person1[i])  // SanketG  60  Nagpur  ['playing','gaming','sleeping','anime']

for (let j in person1)
    console.log(`${j} : ${person1[j]}`)  //name : SanketG   rollno : undefined  city : Nagpur   hobbies : playing,gaming,sleeping,anime

for (let j in person1)
    console.log(j, ":",  person1[j])  //name : SanketG   rollno : undefined  city : Nagpur   hobbies : playing,gaming,sleeping,anime
   
// iteration using Object.keys
console.log(Object.keys(person1 ))  // array of ['name', 'rollno', 'city', 'hobbies']
console.log(Array.isArray(Object.keys(person1)))  // true

//  --for of-- traversal by treating it as array
for (let k of Object.keys(person1))
    console.log(k)        // name  rollno  city  hobbies

for (let k of Object.keys(person1))
    console.log(person1[k])  // SanketG  60  Nagpur  ['playing','gaming','sleeping','anime']

/////////////////////////////////////////////////////////////////////////////////////////

// computed values
const key1 = 'myKey1'
const key2 = 'myKey2'

const val1 = 'myValue1'
const val2 = 'myValue2'

const obje = {
    [key1] : val1,       // it will replace the "key1" to "myKey1"
    [key2] : val2       // it will replace the "key2" to "myKey2"
}

console.log(obje)   // {myKey1: 'myValue1', myKey2: 'myValue2'}

////////////////////////////////////////////////////////////////////////////////////////////////

// spread operator (...)

const arr = [..."abcde"]
const arrr = [..."12345667"]

console.log(arr)   // ['a', 'b', 'c', 'd', 'e']
console.log(arrr)  // ['1', '2', '3', '4', '5', '6', '6', '7']

const ob1 = {
    key1 : "value1",
    key2 : "value2"
}

const ob2 = {
    key1 : "something",
    key3 : "value3",
    key4 : "value4"
}

const newObj1 = {...ob1, ...ob2}  
const newObj2 = {...ob2, ...ob1, key69 : "value69"}  

console.log(newObj1)  // {key1: 'something', key2: 'value2', key3: 'value3', key4: 'value4'}
console.log(newObj2)  // {key1: 'value1', key3: 'value3', key4: 'value4', key2: 'value2', key69: 'value69'}

////////////////////////////////////////////////////////////////////////////////

// cloning in Objects 

// 1st method (spread operator)
const obj1 = {
    key1:"val1",
    key2:"val2"
}

const obj2 = {...obj1} // yaha par obj2 me obj1 ka address store nai hora balki new object banra
obj1.key3 = 'val3'  
console.log(obj1)   //  {key1: 'val1', key2: 'val2', key3: 'val3'}
console.log(obj2)   // {key1: 'val1', key2: 'val2'}

// 2nd method (Object.assign())
const obj3 = Object.assign({}, obj1)
obj1.key4 = 'val4'
console.log(obj1)   // {key1: 'val1', key2: 'val2', key3: 'val3', key4: 'val4'}
console.log(obj3)   // {key1: 'val1', key2: 'val2', key3: 'val3'}


////////////////////////////////////////////////////////////////////////////////
 
// object destructing   [    datatype {x, y, ..} = object-name   ]

const marvel = {
    hero : "Ironman",
    movie : "Civil War",
    year : "2020",
    mostfamous : "NoWayHome"
}

let {hero, year} = marvel
console.log(hero, year)   // it default uses the key names as variables

let {hero:var1, year:var2} = marvel // the values are stored in "var1" and "var2"
console.log(var1, var2)

let {hero:x, movie:y, ...rest} = marvel
console.log(x, y)  // Ironman Civil War
console.log(rest)  // {year: '2020', mostfamous: 'NoWayHome'}   r"rest" is also a object

////////////////////////////////////////////////////////////////////////////////////

// object inside array

const database = [
    { userID : 1, Fname : "Naruto", gender : "male", city : "hidden leaf" },
    { userID : 2, Fname : "Tony Stark", gender : "male", city : "New York" },
    { userID : 3, Fname : "Hinata", gender : "female", city : "hidden leaf" }
]

console.log(database)
// traverals 

for (let user of database)
    console.log(user)     // each object in new line

for (let user of database)
    console.log(user.userID) // 1  2  3

for (let user of database)
    console.log(user.Fname) // Naruto  Tony Stark  Hinata 

////////////////////////////////////////////////////////////////////////////////////

// nested destructuring

let [user1, user2, user3] = database
console.log(user2)     //  {userID: 2, Fname: 'Tony Stark', gender: 'male', city: 'New York'}


let [{Fname}, , {gender}] = database   // taking "Fname" from first object, skipping second object and taking gender from third object
console.log(Fname)    // Fmane from first object    // Naruto
console.log(gender)   // gender from third object   // Female


let [ ,{Fname:Naam}, {city:localaty}] = database   // skipping first object, taking "Fname" from second object and storing it in variable "Naam" and taking "city" from third object and storing it in variable "locality"
console.log(Naam)    // Fmane from second object    // Tony Stark
console.log(localaty)    // city from second object   // hidden leaf

