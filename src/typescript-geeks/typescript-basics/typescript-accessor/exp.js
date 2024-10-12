var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        set: function (name) {
            this.firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        set: function (name) {
            this.last_name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "".concat(this.first_name, " ").concat(this.last_name);
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("Tuguldur", "Namjildorj");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(first_name, last_name, hobby) {
        var _this = _super.call(this, first_name, last_name) || this;
        _this.hobby = hobby;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "introduction", {
        get: function () {
            return "".concat(_super.prototype.fullName, " \n    hobby:").concat(this.hobby, "\n    ");
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}(Person));
