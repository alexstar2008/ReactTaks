class Person {
    constructor(firstName="John",lastName="Doe",age=0,gender="Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(){
            alert(`Hello, my  name is ${this.fullName}`);
    }
}
let person = new Person();
person.sayHi();
let personCustom = new Person("Alex","Star",19);
personCustom.sayHi();
