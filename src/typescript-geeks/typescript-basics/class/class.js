var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello my name is ", this.name, 'Iam ', this.age);
    };
    return Person;
}());
var tuugii = new Person('Tuguldur', 20);
tuugii.greet();
