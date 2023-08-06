// Optional Chaining

const user1 = {
    firstName : "Sanket",
    address : {houseNo : '123'}
}

const user2 = {
    firstName : "Naruto",
    // address : {houseNo : '1243'}
}

console.log(user1.firstName)
console.log(user1.address.houseNo)
// yaha pe hame error nai milega kyuki 'user1' me sari chije defined hai

console.log(user2.firstName)
/*   console.log(user2.address.houseNo)  */
// lekin yaha hame error milega kyuki 'user2' me address defined nai hai hai lekin agar futume me kahi address ke aane ke chances rae to waha tk code pahuchega hi nai to hame isko ek undefined ki term me return krna hai isliye optional chining use karege

//////// 
console.log(user2?.firstName)   // agar "user2" exist krta hai tabhi "firstname" return kre nai to undefined 
console.log(user2?.address?.houseNo)   // agar "user2" exist krta hai tabhi "address" ki taraf badhe aur agar "address" exist krta hai tabhi "houseNo" return kre nai to undefined 

//////////////////////////////////////////////////////////////////////////////////////////////

////// methods of Objects  (function inside objects)

/////////////  1st this method  (used to refer the current object the function is dealing with)

const person = {
    firstName : "Itachi",
    age : 21,
    about : function(){
        console.log(`Person name is ${this.firstName} and the age is ${this.age}`)
    }  // whithout this keyword the method will give error during execution
}
person.about()  //  Person name is Itachi and the age is 21


function personInfo(){
    console.log(`The person name is ${this.firstName} and his age is ${this.age}`)
}

const person1 = {
    firstName : "Jiraya",
    age : 50,
    about : personInfo
}

const person2 = {
    firstName : "Eren",
    age : 16,
    about : personInfo
}

const person3 = {
    firstName : "Madara",
    age : 1000,
    about : personInfo
}

person1.about()   // The person name is Jiraya and his age is 50
person2.about()   // The person name is Eren and his age is 16
person3.about()   // The person name is Madara and his age is 1000

//////////////////////////////////////////////////////////////////////////////////////////////

///////  call() , apply() and bind() keyword
// these are use to change the reference of the current object by the method to any other object

const user9 = {
    firstName : "Kohli",
    age : 35
}

const user10 = {
    firstName : "Dhoni",
    age : 40,
    about : function(){
        console.log(this.firstName, this.age)
    }
}

user10.about()  // Dhoni  40
user10.about.call(user9)  // Kohli 35   (here the reference of this method is changing)


function bio(hobby, favAnime){
    console.log(`Name => ${this.firstName}, Age => ${this.age}`, hobby, favAnime)
}

const user11 = {
    firstName : "Sanket",
    age : 20
}

const user12 = {
    firstName : "Tanuj",
    age : 21
}

bio.call(user11)  // Name => Sanket, Age => 20 undefined undefined 
bio.call(user12)  // Name => Tanuj, Age => 21 undefined undefined

bio.call(user11, "cricket")    // Name => Sanket, Age => 20 cricket undefined
bio.call(user12, "football", "onepiece")   // Name => Tanuj, Age => 21 football onepiece


/// apply()  {isme bas extra arguments array me pass hoge}
bio.apply(user11, ["sleeping", "OG-Naruto"])  // Name => Sanket, Age => 20 sleeping OG-Naruto
bio.apply(user12, ["study"])   // Name => Tanuj, Age => 21 study undefined


/// bind()   {it jast stores the information in the function}
const func1 = bio.bind(user11, "timepass")
const func2 = bio.bind(user12, "majekrna", "kuchnai")

func1()  // Name => Sanket, Age => 20 timepass undefined
func2()  // Name => Tanuj, Age => 21 majekrna kuchnai

/////////// arrow function in objects
// this keyword arrow function me directly us object me nai lagta , vo uske surruonding me 1 level uper se lega

const person0 = {
    firstName : "tony",
    age : 10,
    about : () => {          // arrow  function declaration 
        // console.log(this)
        console.log(this.firstName, this.age)    // here this will represent 1 lvl above the surrounding of the object i.e. window object
        /*   Window {window: Window, self: Window, document: document, name: '', location:        Location, …}
        */
    }
}

person0.about()    // undefined undefied
person0.about(person0)    // undefined undefied

//////////////////////////////////////////////////////////////////////////////////////////////

/////////////////   Concept of PROTO   =====    {    __proto__    or   [[prototype]]    }

// har object ke __proto__ me reference hota hai kisi ka

///    {   __proto __    and    [[prototype]]   are SAME  and    prototype   is  DIFFERENT }

// suppose ham chate hai ke agar kisi object ke pas koi proerty nai hai aur kisi aur object ke pas wo property hai to ham usko access krna cahte hai to waha ye proto wala concept use hoga

/*   Object.create()  method is used    */

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 ={     // normally created object   iske proto
    key3 : "value3"
}

console.log(obj2)      //  {key3: 'value3'}     iska __proto__ empty hai
console.log(obj2.key3)    /// value3
console.log(obj2.key1)    /// undefined    (ab yaha ham obj1 ki value ki need thi)
console.log(obj2.__proto__)   // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}


const obj3 = Object.create(obj1)    // {}
// ye ek empty object dege obj3 name ka jiska __proto__ hoga obj1

obj3.key3 = "new_value3"     // value assigning

console.log(obj3)     // {key3: 'new_value3'}
console.log(obj3.key3)    //  new_value3

console.log(obj3.key1)   ///  value1    (deduced from obj1)
console.log(obj3.__proto__)   //   {key1: 'value1', key2: 'value2'}

//////////////////////////////////////////////////////////////////////////////////////////////

/////////////////   Concept of PROTOTYPE   =====    {    prototype    }

// whenever we create any Function in javascript with the function we get an empty space (empty object {} ) that can be used for many tasks like for __proto__ defination or other 

// only functions can provide prototype property

function hello(){
    console.log("Hellow world!!")
}      // here automatically we get an emty prototype object

if (hello.prototype) 
    console.log("hello() function has a prototype")    //  executed
else 
    console.log("hello() function dont have prototype")

console.log(hello.prototype)    // {constructor: ƒ}

const obj = {
    key1 : "val1"
}   // objects will not have  prototype

if (obj.prototype) 
    console.log("'obj' object has a prototype") 
else    
    console.log("'obj' object dont have prototype")                  //  executed

// we can add many properties in prototype space

hello.prototype.key1 = "value1";
hello.prototype.battery = "90%";
hello.prototype.sachin = "lampuu hai";
hello.prototype.sing = function(){
    return "la la la lala"
}
console.log(hello.prototype)
  // {key1: 'value1', battery: '90%', sachin: 'lampuu hai', sing: ƒ(), constructor: ƒ}

//////////////////////////////////////////////////////////////////////////////////////////////

/////////////////   Concept of new keyword   =====    {    new    }

// isse ham naye objects banate wakt use kr skte hai 
// "new" keyword wale function ki definition ka tarika alag hota hai to usually inko identify krne ke liye ham in functions ka name capital letter se start krte hai

// "new" keyword se bane function directly ek object return krte un methods ke sath jo jo function definaition me defined hai
// isse bane hue objects ka __proto__ directly creator function ka prototype set ho jata hai to hame manually krne ki jaruarat nai hoti

//  new function definition
function Creator(firstName, age){ // isse ek emty object create ho jaega {}
    // empty objct ka access 'this' keyword se hoga
    this.firstName = firstName;
    this.age = age;
}

// __proto__ automatically Creator function ka prototype set ho jaega
Creator.prototype.about = function(){
    console.log(this.firstName, this.age)
}

// inka banane ka tarika alag hota hai
const userXYZ = new Creator('Batman', 23)

console.log(userXYZ)           // Creator {firstName: 'Batman', age: 23}
userXYZ.about()        // Batman 23

//////////////////////////////////////////////////////////////////////////////////////////////


// functions for creating objects in with improvements

/// Stage 1 

// we have to make multiple user objects of the template blueprint. it is very tedeous so we will create a fnction that will do this job for us

// template blueprint
const userX = {
    firstName : "jack",
    lastName : "sparrow",
    email : "jacksparrow01@gmail.com",
    age : 30,
    address : "carrabeeian islands",
    about : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18
    }
}

// function to create new users on basis of template function above

function createUser(firstName, lastName, email, age, address){  // function to create new user
    const user = {};       // creating an empty object then assigning properties
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`
    }
    user.is18 = function(){
        return this.age >= 18
    }
    return user;       // returning
}

const user101 = createUser("Sanket", "Gourkhede","xyz@gmail.com", 16 ,'Nagpur')
console.log(user101)
// {firstName: 'Sanket', lastName: 'Gourkhede', age: 16, address: 'Nagpur', about: ƒ, is18 : ƒ ()}

console.log(user101.is18())  // false as age is 16
console.log(user101.lastName)    // Gourkhede
console.log(user101.about())    // Sanket is 16 years old


const user102 = createUser("Tanuj", "Rathore","xyz456@gmail.com", 21 ,'Indore')
console.log(user102)
// {firstName:'Tanuj',lastName:'Rathore',age: 21,address:'Indore', about : ƒ(), is18 : ƒ()}


console.log(user102.about())   // Tanuj is 21 years old
console.log(user102.email)    //  xyz456@gmail.com


////////  Stage 2 

// hame stage 1 me bas ek basic sa function banaya jo ki new objects bana ke dera tha user template blueprint ke hisab se lekin isme kamiya thi jaise space commplexity (same methods har user ke liye new ban rah thi) to ise ham yaha resolve krege

// ham ky krne wale hai ki ek alag object banaege jisme sari methods hogi aur sirf new users banaege jisme methods specifically declared nai hogi balki inme reference hoga un methods ke liye so abhi ye space bach jaegi

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18
    }  
}

function createUserUpdated(firstName, lastName, email, age, address){  
    const user = {};                                        // function to create new user
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
    user.about = userMethods.about;     // referening
    user.is18 = userMethods.is18;
    return user;       
}

const user201 = createUserUpdated("Sanket", "Gourkhede","xyz@gmail.com", 16 ,'Nagpur')

console.log(user201)
// {firstName: 'Sanket', lastName: 'Gourkhede', age: 16, address: 'Nagpur', about: ƒ, is18 : ƒ ()}

console.log(user201.is18())  // false as age is 16
console.log(user201.lastName)    // Gourkhede
console.log(user201.about())    // Sanket is 16 years old


const user202 = createUserUpdated("Tanuj", "Rathore","xyz456@gmail.com", 21 ,'Indore')

console.log(user202)
// {firstName:'Tanuj',lastName:'Rathore',age: 21,address:'Indore', about : ƒ(), is18 : ƒ()}

console.log(user202.about())   // Tanuj is 21 years old
console.log(user202.email)    //  xyz456@gmail.com


////////  Stage 3

// agar hamare pas kub sare methods ho to usko userMethods wale object me declare krne ke baad be ceateuser wale function me hamko explicetly link krna padta jisko ham avoide kar skte agar ham directly new object banate wakt uska __poto__ usermethods hhi set kar de to. isse new user aur usermethods wale object me pahele se hi relationship establish ho jaega to hame sari methods firse explicitly link nai krni padegi

const userAllMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18
    },
    sing : function(){
        return "When I get Older I will be Strongerr ...."
    } 
}

function new_User(firstName, lastName, email, age, address){  // function to create new user
    const user = Object.create(userAllMethods);   ///  __proto__ == userAllmethods
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;       
}

const user301 = new_User("Sanket", "Gourkhede","xyz@gmail.com", 16 ,'Nagpur')

console.log(user301)
// {firstName: 'Sanket', lastName: 'Gourkhede', email:'xyz@gmail.com',age: 16,address:'Nagpur', …}
console.log(user301.is18())  // false as age is 16
console.log(user301.lastName)    // Gourkhede
console.log(user301.about())    // Sanket is 16 years old


const user302 = new_User("Tanuj", "Rathore","xyz456@gmail.com", 21 ,'Indore')

console.log(user302)
// {firstName: 'Tanuj', lastName:'Rathore',email:'xyz456@gmail.com', age: 21, address:'Indore', …}

console.log(user302.about())   // Tanuj is 21 years old
console.log(user302.email)    //  xyz456@gmail.com
console.log(user302.sing())   // When I get Older I will be Strongerr ....


////////  Stage 4

// ham abhi extra methods define kren ke liye createuser wale function ka hi prototype use krege

// ham har object ke __proto__ me createUser function ka prototype set kr dege aur yehi par sari methods aur functions define krege

function new_User_stg4_(firstName, lastName, email, age, address){  // function to create new user
    const user = Object.create(new_User_stg4_.prototype);  
     ///  __proto__ == new_user_stg4 function ka prototype
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;       
}

// defining all methods in the prototype space of new_user_stg4_ function
new_User_stg4_.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
}

new_User_stg4_.prototype.is18 =  function(){
    return this.age >= 18
}

new_User_stg4_.prototype.sing = function(){
    return "mai hu Jian mai hu bada takatwar ...."
}


const user401 = new_User_stg4_("Sanket", "Gourkhede","xyz@gmail.com", 16 ,'Nagpur')

console.log(user401)
// {firstName: 'Sanket', lastName: 'Gourkhede', email:'xyz@gmail.com',age: 16,address:'Nagpur', …}
console.log(user401.is18())  // false as age is 16
console.log(user401.lastName)    // Gourkhede
console.log(user401.about())    // Sanket is 16 years old

const user402 = new_User_stg4_("Tanuj", "Rathore","xyz456@gmail.com", 21 ,'Indore')

console.log(user402)
// {firstName: 'Tanuj', lastName:'Rathore',email:'xyz456@gmail.com', age: 21, address:'Indore', …}

console.log(user402.about())   // Tanuj is 21 years old
console.log(user402.email)    //  xyz456@gmail.com
console.log(user402.sing())   // mai hu Jian mai hu bada takatwar .....


////////  Stage 5

// ham abhi create function "new" keyword se banaege

function Create_User_stg5(firstName, lastName, email, age, address){  // function to create new user
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this;           /// ye statement optional hai
}

// defining all methods in the prototype space of Create_User_stg5( function
Create_User_stg5.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
}

Create_User_stg5.prototype.is18 =  function(){
    return this.age >= 18
}

Create_User_stg5.prototype.sing = function(){
    return "Jine mera dil Luteya Ohh Hooo ...."
}


const user501 = new Create_User_stg5("Sanket", "Gourkhede","xyz@gmail.com", 16 ,'Nagpur')

console.log(user501)
// {firstName: 'Sanket', lastName: 'Gourkhede', email:'xyz@gmail.com',age: 16,address:'Nagpur', …}
console.log(user501.is18())  // false as age is 16
console.log(user501.lastName)    // Gourkhede
console.log(user501.about())    // Sanket is 16 years old

const user502 = new Create_User_stg5("Tanuj", "Rathore","xyz456@gmail.com", 21 ,'Indore')

console.log(user502)
// {firstName: 'Tanuj', lastName:'Rathore',email:'xyz456@gmail.com', age: 21, address:'Indore', …}

console.log(user502.about())   // Tanuj is 21 years old
console.log(user502.email)    //  xyz456@gmail.com
console.log(user502.sing())   // Jine mera dil Luteya Ohh Hooo ....

//////////////////////////////////////////////////////////////////////////////////////////////////

// hsownProperty() => it is use to identify which property and methods of the objects are explicetly of its own and which are it is deriving from somewhere

for (let key in user501)    // isse sari keys print ho jaegi
    console.log(key)    // firstName  lastName  email age  address  about  is18  sing

for (let key in user501)    // isse sirf user ki keys print ho jaegi
{
    if (user501.hasOwnProperty(key))
        console.log(key)    // firstName   lastName   email   age    address
}

////////////////////////////////////////////////////////////////////////////////////////////////////

//  Now we will use the concept of Object Oriented Programming (Objects and Classes)
// classes me internally same kam hoga jo stage 5 me kiya tha (concept of 'new' , __proto__ , prototype , etc ) so ham kabhi kabhi Classes ko javascript me fake bhi bol dete

////////  Stage 6

class UserCreator{
    constructor(firstName, lastName, email, age, address) {   // it will create our object 
        console.log("constructor invoked")
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
        // return this;           /// ye statement optional hai
    }

    // declaring methods 

    /// ye declaration function ka hai so ye function explicitly execute hoga
    about = function(){
        return `${this.firstName} is ${this.age} years old`
    }
    sing = function(){
        return "Shinzo wo Sasageyo ...."
    }

    /// ye declaration method ka hai so ye method explicitly execute nai hogi to ye creator function / creator Class ke prototype space me execute hoga
    is18(){
        return this.age >= 18
    }
    isPolite(){
        return "No";
    }
}

const user601 = new UserCreator("Sanket", "Gourkhede","xyz@gmail.com", 16 ,'Nagpur')

console.log(user601)
// {firstName: 'Sanket', lastName: 'Gourkhede', email:'xyz@gmail.com',age: 16,address:'Nagpur', …}
console.log(user601.is18())  // false as age is 16
console.log(user601.lastName)    // Gourkhede
console.log(user601.about())    // Sanket is 16 years old
console.log(user601.isPolite())  // No

const user602 = new UserCreator("Tanuj", "Rathore","xyz456@gmail.com", 21 ,'Indore')

console.log(user602)
// {firstName: 'Tanuj', lastName:'Rathore',email:'xyz456@gmail.com', age: 21, address:'Indore', …}

console.log(user602.about())   // Tanuj is 21 years old
console.log(user602.email)    //  xyz456@gmail.com
console.log(user602.sing())   // Jine mera dil Luteya Ohh Hooo ....
console.log(user601.isPolite())  // No


console.log(Object.getOwnPropertyNames(user601))