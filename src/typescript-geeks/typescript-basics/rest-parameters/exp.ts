function getAverage(...numbers:number[]):number{
    const sum=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
    return sum/numbers.length
}
console.log(getAverage(12,3,3))

function joinStrings(...strings:string[]):string{
    return strings.join(', ');
}
//Rest parameters should be placed at the end of the parameters
