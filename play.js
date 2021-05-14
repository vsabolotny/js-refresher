
const myname = "Vlad";

const greetingUser = (name) => {
    return "hello " + name + "!";
}

const add = (a, b) => a + b;
const addOne = a => a + 1;

console.log(greetingUser(myname));
console.log(addOne(1));
console.log(add(2,1));

/** --- */

const person = {
    name: "Vlad",
    age: 29,
    greet() {
        console.log("Hi, welcome to the js refresher, " + this.name);
    }
}

console.log(person);
person.greet();

/** --- */

const hobbies = ["cook", "hiking"];
console.log(hobbies.map(hobby => "Hobby: " + hobby));

hobbies.push("programming");
console.log(hobbies);

/** --- */

const hobbiesExt = [...hobbies];
console.log("Hobbies extended: " + hobbiesExt);