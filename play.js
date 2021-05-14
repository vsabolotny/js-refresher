
/** Variable & Function */

let myname = "Vlad";

const greetingUser = (name) => {
    return "hello " + name + "!";
}

const add = (a, b) => a + b;
const addOne = a => a + 1;

console.log(greetingUser(myname));
console.log(addOne(1));
console.log(add(2,1));

/** Object */

const person = {
    name: "Vlad",
    age: 29,
    greet() {
        console.log("Hi, welcome to the js refresher, " + this.name);
    }
}

console.log(person);
person.greet();

/** Array */

const hobbies = ["cook", "hiking"];
console.log(hobbies.map(hobby => "Hobby: " + hobby));

hobbies.push("programming");
console.log(hobbies);

/** Rest & Spread */

const hobbiesExt = [...hobbies];
console.log("Hobbies extended: " + hobbiesExt);

const toArray = (...args) => {
    return [...args];
};
console.log(toArray(1,2,3,4,5));

/** Destructuring */

const employee = {
    name: "Vlad",
    age: 29,
    city: "Munich",
    greet() {
        console.log("Hi, welcome to the js refresher, " + this.name);
    }
}

const printName = ({ name, age }) => {
    console.log(name + " is " + age + " years old");
}
printName(employee);

const { name, age, city } = employee;
console.log(name, age, city);

const [h1, h2] = hobbies;
console.log(h1, h2);

/** Async & Promises */

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done callback call");
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log("Timer is done");
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    });
}, 2000);

