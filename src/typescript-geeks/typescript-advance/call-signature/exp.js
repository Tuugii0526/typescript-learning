var product = function (input) {
    return "Hello ".concat(input);
};
product.productType = 'Product type getting function';
console.log(product('shoes'));
console.log(product(product.productType));
var add = function (a, b) { return a + b; };
add.operation = "Addition";
var multiply = function (a, b) { return a * b; };
multiply.operation = "Multipication";
console.log("Operation:".concat(add.operation, " , Result:").concat(add(12, 3)));
console.log("Operation:".concat(multiply.operation, ", Result:").concat(multiply(3, 4)));
