export const what=()=>{
    return `
    ES5
        FUNCTION CONSTRUCTOR
        The below is like a function . But it is class contructor function. 
        function Person(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
        }

        PROTOTYPE METHOD
        Person.prototype.getFullName=function()=>{
        return this.firstName+this.lastName
        }
    ES6
        Use class keyword to define a class in TypeScript.
        TypeScript leverages the ES6 class syntax and adds type annotations to make the class more robust.
    `
}