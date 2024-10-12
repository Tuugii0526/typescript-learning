function whatIsLength(x, y) {
    if (x.length > y.length) {
        return "x is larger than y";
    }
    else {
        return "y is larger than x";
    }
}
var ans = whatIsLength([1, 2], [34, 24, 8]);
console.log('answer is', ans);
