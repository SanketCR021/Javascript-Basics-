/// Classes and Objects

class Animal{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    // methods

    /// ye declaration function ka hai so ye function explicitly execute hoga
    eat = function(){            
        return `${this.name} is eating`
    }
    /// ye declaration method ka hai so ye method explicitly execute nai hogi to ye creator function / creator Class ke prototype space me execute hoga
    isCute(){
        return this.age <= 2;
    }
}

const tom = new Animal("Tom", 3)

console.log(tom)       // Animal {name: 'Tom', age: 3, eat: ƒ}
console.log(tom.eat())     // Tom is Eating
console.log(tom.isCute())  // false



const jerry = new Animal("Jerry", 2)

console.log(jerry)       // Animal {name: 'Jerry', age: 2, eat: ƒ}
console.log(jerry.eat())     // Jerry is Eating
console.log(jerry.isCute())  // true


// Now suppose we want to create a class Dog who has same definitions as of Animal class so copying and pasting the deefinition(methods and properties can be tedious) so we will just use the concept of "extend" of OOPS here

class Dog extends Animal{  // Animal == Parent / Super class   ,  Dog === child class

}

const spike = new Dog("Spike", 3)
console.log(spike)       //   Dog {name: 'Spike', age: 3, eat: ƒ}
console.log(spike.eat())     // Spike is Eating
console.log(spike.isCute())  // false


// Now suppose we want to create a class Rabbit who has same definitions as of Animal class and want to have some more properties like the speed so we want to have a modified constructor for this class

class Rabbit extends Animal{
    constructor(name, age, speed){
        super(name, age);    /// ye attributes super class ka logic follow krege
        this.speed = speed;
    }
    eat = function(){    // this will override the original eat() from the super class
        return `Modified eat == > ${this.name} is eating`
    }
    run(){
        return `${this.name} can run at ${this.speed} Kmph`
    }
}

const bugs = new Rabbit("BugsBunny", 2, 55)
console.log(bugs)       //   Rabbit {name: 'BugsBunny', age: 2, speed: 55, eat: ƒ}
console.log(bugs.eat())     // Modified eat == > BugsBunny is eating
console.log(bugs.isCute())  // true
console.log(bugs.run())    ///  BugsBunny can run at 55 Kmph

///////////////////////////////////////////////////////////////////////////////////////////////////

// getters and setters

// getters ==>  it converts the function declared in the classe to properties

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){  // ye ab ek property ban gai hai jisko access krne ke liye () use nai krna hoga
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName)
    {
        const [firstName, lastName] = fullName.split(" ");     // array destructuring
        // isse "fullname" wali string 2 parts me divide ho jaegi jaha pasre first space " " milegi 

        this.firstName = firstName
        this.lastName = lastName
    }
}

const person101 = new Person("Itachi", "Uchiha", 21)

console.log(person101)      // Person {firstName: 'Itachi', lastName: 'Uchiha', age: 21}
console.log(person101.fullName)  // Itachi Uchiha
// console.log(person101.fullName())  // This will give ERROR

console.log(person101.firstName)    // Itachi
console.log(person101.lastName)      // Uchiha

person101.fullName = "Minato Namikaze"   // setting new name

console.log(person101.firstName)   // Minato
console.log(person101.lastName)   // Namikaze

console.log(person101.fullName)      // Minato Namikaze

///////////////////////////////////////////////////////////////////////////////////////////////////

// Static Method and Properties

// Static methods wo methods hoti hai jinko execute hone ke liye kisi Object creation ki need nai hoti wo class se hi execute hoti hai aur Object se execute hoti bhi nai hai


class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static desc = "This is a Static Variable";    /// static Variable devlaration

    static classInfo(){          /// static method devlaration
        return 'This is a User Class (Static)'
    }

    get fullName(){ 
        return `${this.firstName} ${this.lastName}`
    }

}

console.log(User.fullName)        // undefined
console.log(User.classInfo())      //  This is a User Class (Static)
//     [Static method (dosent require Object creattion)]


console.log(User.desc)      //  This is a Static Variable
//     [Static varible (dosent require Object creattion)]

const user101 = new User('Peter', 'Parker', '20')

console.log(user101)      //  User {firstName: 'Peter', lastName: 'Parker', age: '20'}
console.log(user101.fullName)  // Peter Parker

// console.log(user101.classInfo())   // It will give ERROR  [static method]

console.log(user101.desc)   // undefined  [static variable]
