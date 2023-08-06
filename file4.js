// iterables => ye wo datastructure hai jispar ham for of loop laga skte hai
// eg = string , array are iterables but objects are not iterables

// array like objects => ye wo datastructure hai jinke pas length() proprty hoti hai aur jinko ham index se access kar skte hai 
// eg = string

/////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////   Sets (datastructure)  (iterable)

// stores data , has its own methods , no index-based access , order is not gurenteed
// no duplicates are allowed in this

const numbers = new Set([1, 2, 3, 3])
console.log(numbers)   // Set(3) {1, 2, 3}
console.log(numbers[2])  // undefined    as no index based access is there 

const alphabets = new Set("abcde")
console.log(alphabets)  // Set(5) {'a', 'b', 'c', 'd', 'e'}
console.log(alphabets.length)  // undefined  s

// uper ke dono tariko me set me elements add ho rae hai array se aur string se jo ki hore hai inbuilt for of loop ki tarike se kyuki array aur string iterables hai

const arr = [1, 5, 9]
const mySet = new Set()  // empty set    Set(0) {size: 0}
mySet.add(1)   // Set(1) {1}
mySet.add(2)   // Set(2) {1, 2}
mySet.add(3)   // Set(3) {1, 2, 3}
mySet.add(3)   // Set(3) {1, 2, 3}

mySet.add(arr)  // Set(4) {1, 2, 3, Array(3)[1, 5, 9]}
mySet.add(arr)  // Set(4) {1, 2, 3, Array(3)[1, 5, 9]}
// is case me set me hamne ek hi initialized kiye hue array ko 2 bar insert kiya hai isliye vo sirf ek bar add hua hai 

mySet.add([1, 8, 11, 20])    // Set(5) {1, 2, 3, Array(3)[1, 5, 9], Array(4)[1, 8, 11, 20]}
mySet.add([1, 8, 11, 20])    // Set(6) {1, 2, 3, Array(3)[1, 5, 9], Array(4)[1, 8, 11, 20], Array(4)[1, 8, 11, 20]}
// is case same values vala array 2 bar add ho gaya kyuki dono bar new address pe arrar bana hai
console.log(mySet)   

//////// has() method
// it will return a boolean value weather a value is present in te set or not

let val = mySet.has(2)
console.log(val)  // true

console.log(mySet.has(5))  // false
console.log(mySet.has(arr))  // true
console.log(mySet.has([1, 5, 9]))  // false (kyuki new array ban raha hai)
console.log(mySet.has([1, 8, 11, 20]))  // false (kyuki new array ban raha hai)

/////////////// for of loop on set (as it is an iterable)
const superSet = new Set()
superSet.add(10)
superSet.add(20)
superSet.add(30)
superSet.add(40)

for (let number of superSet)
    console.log(number)   // 10  20  30  40 (on new line)

/*  for (let number of mySet)
        console.log(number)     */


/////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////   Maps (datastructure)  (iterable)

// it also stores the key value pair like the objct literal
// difference is that object literal stores its keys in only strings and symbols wheares we can store keys in any format in map

// it stores data in ordered fashion and dupluicate keys are not allowed keys get updated with newest values in order of their occurances



const per = {                           // object literal (not an iterable)
    fname : "bruce",
    age : 20,
    14 : "fourteen"         // isme 14 hi as a string treat hora hai
} 
console.log(per.fname)  // bruce
console.log(per["fname"])  // bruce
console.log(per[14])  // fourteen

for (let key in per)
    console.log(typeof key)  // string   string   string


const person = new Map()
person.set('fname', 'Sanket')     // adding ( key , value )   pair
// person.set(age, 20)                                                   // ERROR
person.set("age", 20)
person.set(14, "fourteen")  // 14  number ke form me hi add hoga

console.log(person)   //  Map(3) {'fname' => 'Sanket', 'age' => 20, 14 => 'fourteen'}

console.log(person.fname)         // undefined
console.log(person["fname"])       // undefined

// to access the key key value pairs in the map we use get method
console.log(person.get('fname'))        // Sanket
// console.log(person.get(age))                                           //  ERROR
console.log(person.get("age"))        // 20
console.log(person.get(14))           // fourteen


console.log(person.keys())      // MapIterator {'fname', 'age', 14}

for (let key of person.keys())
    console.log(key)      // fname  age  14  (in new line)

for (let key of person)
    console.log(key)
//  (2) ['fname', 'Sanket']      (in array format)
//  (2) ['age', 20]              (in array format)
//  (2) [14, 'fourteen']         (in array format)

for (let key of person)
    console.log(Array.isArray(key))   // 3 true

// destructuring key value pair from the array representation

for (let [key, value] of person)    
    console.log(key, value)
//  fname Sanket
//  age 20
//  14 'fourteen'


const myMap = new Map()
myMap.set('name', 'Batman')    
myMap.set("age", 30)
myMap.set(69, "sixty-nine")
myMap.set([1, 2, 3], "onetwothree")    // adding key as an array
myMap.set({1 : "one", 2 : "two"}, "ONETWO")    // adding key as an object

for (let key of myMap.keys())
    console.log(key, typeof key)
//  name string
//  age string
//  69 'number'
//  (3) [1, 2, 3] 'object'
//  {1: 'one', 2: 'two'} 'object'


const person2 = new Map([['firstname', 'Itachi'], ['age' , '21'], ['gender' , 'male']])
console.log(person2)   // Map(3) {'firstname' => 'Itachi', 'age' => '21', 'gender' => 'male'}


// a map in which object is mapped with another object

const user1 = {           //  object (it will act as key)
    id : 1,
    firstName : "Jiraya"
}

const user2 = {           //  object (it will act as key)
    id : 2,
    firstName : "Hinata"
}

const userInfo = new Map()
userInfo.set(user1, {age : 35, gender :"male"})  // object mapped with object
userInfo.set(user2, {age : 21, gender :"female"})

console.log(userInfo)
/*  Map(2) {{…} => {…}, {…} => {…}}
    [[Entries]]
    0 : {Object => Object}
    key : {id: 1, firstName: 'Jiraya'}
    value : {age: 35, gender: 'male'}

    1 : {Object => Object}
    key : {id: 2, firstName: 'Hinata'}
    value : {age: 21, gender: 'female'}
*/

console.log(user1.firstName)  // Jiraya
console.log(userInfo.get(user1))  // {age: 35, gender: 'male'}
console.log(userInfo.get(user1).gender)   // male

console.log(user2.firstName)  // Hinata
console.log(userInfo.get(user2))  // {age: 21, gender: 'female'}
console.log(userInfo.get(user2).age)  // 21
console.log(userInfo.get(user2).gender)   // female