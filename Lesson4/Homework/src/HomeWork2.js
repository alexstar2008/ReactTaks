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

class User extends Person{
        constructor(id,signUpDate=0,...paramsPerson){
            super(...paramsPerson);
            this.id = id;
            this.signUpDate = signUpDate;
        }
}

const users = [];
users.push(new User(22,new Date().getDate(),"Alex","Star",19));
users.push(new User(22,new Date().getDate(),"Vasia","Star",19));
users.push(new User(22));
console.log(users);

export { users };