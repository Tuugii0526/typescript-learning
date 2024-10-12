function getAverage() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
    return sum / numbers.length;
}
console.log(getAverage(12, 3, 3));

