// ES Module Export

export const person = {
    name: "Mike",
    role: "Developer"
};

export function printRole(){
    console.log(person.role);
}

export default {
    person,
    printRole
}