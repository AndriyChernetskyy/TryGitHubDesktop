class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface IPerson {
    firstName: string;
    lastName: string;
}

function greeter(person : IPerson) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Andriy", "M.", "User");

console.log(greeter(user));
