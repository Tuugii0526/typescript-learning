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
var Cart = /** @class */ (function () {
    function Cart(owner, items, history) {
        this.owner = owner;
        this.items = items;
        this.history = history;
    }
    Cart.prototype.display = function () {
        console.log("\n        owner:".concat(this.owner, "\n        items:").concat(this.items, "\n        history:").concat(this.history, "\n        "));
    };
    return Cart;
}());
var CartForWords = /** @class */ (function (_super) {
    __extends(CartForWords, _super);
    function CartForWords(owner, items, history) {
        return _super.call(this, owner, items, history) || this;
    }
    return CartForWords;
}(Cart));
var cart = new CartForWords('Tuvshee', ['ministry', 'clamber', 'grubby'], ['burnish', 'swarthy']);
cart.display();
