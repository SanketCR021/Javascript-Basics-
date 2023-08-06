////////// Function  Declaration  //////////

function helloWorld(){
    console.log("Hello World")
}

function summation(num1, num2){
   return num1+num2
}

function findTarget(array, k){
    for(let i = 0; i < array.length; i++)
    {
        if (array[i] === k) 
            return i
    }
    return -1;
}

//////////////////////   Function Expression ////////////////////

// we are storing the function's definations in a variable and is called by the variable's name

const happyBirthday = function(){        
    console.log("Happy Birthday to you !!!")
}

const summ2 = function(num1, num2){
    return num1+num2
}

///////////////////////////  Arrow Fuctions  //////////////////

const happyBday = () => {
    console.log("Happy Birthday Jii   (By Arrow Function)")
}

const arrowSumm3 = (num1, num2) => {
    return num1+num2
}

const isEven = (num) =>{
    if (num&1 === 1)
        console.log("Not an even Number ", num)
    else
    console.log("It is an even Number ", num)
}

/////////////////////////  Function Inside Function  /////////////////////////

const myApp = () => {
    const insideMyApp1 = () =>{
        console.log("hellow from InsideMyApp1")
    }
    const addNum = (num1, num2) =>{
        return num1+num2
    }
    const mult = (num1, num2) => num1*num2   // one line declataion

    // Calling
    insideMyApp1()
    console.log(addNum(5, 8)) // 13
    console.log(mult(10, 5))  // 50
}

function myNestedFunction(){
    const myVar = "Value1"
    function myFun1(){                      // Normal Declaration
        const myVar = "Value69"
        console.log("inside myFun1 myVar == ", myVar)    // Value69
    }

    const myFun2 = function(){              //  Function Expression
        console.log("inside myFun2 myVar == ", myVar)     // value1
    }

    myFun1()
    myFun2() 
}

/////////////////////////////////////////////////////////////
//  default parameters
// method 1
function addition(a, b = 0)   // if b is naot passed during function call it will defaulty take b as 0
{
    return a+b;
}

// method 2
function addition2(a, b)
{
    if (typeof b === "undefined")
        b = 0;
    return a+b;
}

/////////////////////////////////////////////////////////////////

                    //  rest parameters  // 
//  if we have define a certain no of parameters in a function and in the time of calling if we encounter more parameters than specified the we can handle them by rest parameters

function restFunction(a, b, ...c){   
    //it will store first 2 parameters as a and b rest other parameters are stored in c as an array
    console.log("value of a is : ", a)
    console.log("value of b is : ", b)
    console.log("value of rest elements is : ", c)
}

function addAll(...nums){   // it can take any number of arguments and return their sun
    let total = 0;
    for (let i of nums)
        total += i
    return total
}




///////////////////*/ Function  Calls ////////////////////////

helloWorld()        // Normal Function

happyBirthday()     // Function Expression

happyBday()        //  arrow Function


console.log(summation(4,6))   // 10(number)   // Normal Function
console.log(summation(5,4,8))   // 9 [4+5]  //// If we pass more than specified parameters functon will take the number of specified parameters only in left to right direction

console.log(summ2(5, 10))    // 15(number)    // Function Expression
console.log(summ2(5))   // NaN   ////  If we pass less than than the specified paraeters, function will return "NaN" (NotaNumber) as the output

console.log(arrowSumm3(15, 10))    // 25(number)    // Arrow Function 

isEven(8)  // It is an even Number  8   (arrow function)
isEven(0)  // It is an even Number  0   (arrow function)
isEven(5)  // Not an even Number  5   (arrow function)


console.log(findTarget([1,56, 43, 74, 8,9], 74))    // giving index  3
console.log(findTarget([1,56, 43, 74, 8,9], 6))    // giving index  -1

myApp()    // Function inside Function

myNestedFunction()


console.log(addition(4, 5)) // 9
console.log(addition(6))   // 6  (defaultly taken 2nd parameter as 0 by the function)

console.log(addition2(61))   // 6  (defaultly taken 2nd parameter as 0 by the function)


restFunction(1,2,3,4,4,5,6,7)   /// rest parameterized function  a = 1, b = 2 , c = [3,4,4,5,6,7]
restFunction(1, 2,3,4)  // a = 1, b = 2 , c = [3,4]
restFunction(2)  // a = 2 , b = undefined , c = []

console.log(addAll(4,5,7,90,6))  // 112
console.log(addAll(4,5,6))  // 15

/////////////////////////////////////////////////////////////////////////////

                    // parameter destructing  //

const person = { 
    firstName : "Itachi",
    gender : "male",
    age : 21
}

// it is a normal function that does not destructure object directly
function detailsNormally(obj){
    console.log(obj.firstName)
    console.log(obj.gender)
}

// we will make a function that can destructure keys in a object directly while passing

function detailsDestructured({firstName, gender, ...rest}){
    console.log(firstName)
    console.log(gender)
    console.log(rest)
}

detailsNormally(person)  // itachi  male

detailsDestructured(person)  // Itachi  male   {age: 21}

/////////////////////////////////////////////////////////////////////////////

                    // callback functions  //
function myFunction(name){
    console.log("This is inside callback Function")
    console.log("The name passed by parent function is", name)
}

function parent(callback){    //  callback will store the function passed
    console.log("This is inside parent function")
    console.log("calling the callback function with some name provided")
    callback("Sanket")
}

parent(myFunction)

/////////////////////////////////////////////////////////////////////////////

                    // function returning function  //

function superFun(){
    function ultraFun(){
        console.log("Hellow Duniya")
    }
    return ultraFun
}

const ans = superFun()
console.log(ans)     /// ƒ ultraFun(){ console.log("Hellow Duniya") }

function upperLvl()
{
    function loweLvl()
    {
        console.log("Kya bolte Duniya")
    }
    return loweLvl
}

const val = upperLvl()
val()   // Kya bolte Duniya