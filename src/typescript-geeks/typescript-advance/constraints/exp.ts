function whatIsLength<Type extends { length: number }>(x: Type, y: Type) {
  if (x.length > y.length) {
    return "x is larger than y";
  }
  else
  {
    return "y is larger than x";
  }
}
const ans=whatIsLength([1,2],[34,24,8])
console.log('answer is',ans)
