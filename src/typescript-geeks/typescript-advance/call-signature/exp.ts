// //Typescript call signatures define objects that can be invoked like functions but also have properties .They specify the parameters and return type for the function-like behaviour.They can include additional properties ,enabling the creation of versatile , callable objects that act as both functions and data containers.
// type Product={
//     (input:string):string ;//Call signature
//     productType:string;
// }
// const product:Product=(input:string)=>{
//     return  `Hello ${input}`
// }
// product.productType='Product type getting function'
// console.log(product('shoes'))
// console.log(product(product.productType))


// //EXAMPLE 2 CALCULATOR
// type Calculator={
//     (a:number,b:number):number;
//     operation:string;
// }
// const  add:Calculator=(a:number,b:number)=>a+b;
// add.operation="Addition"
// const multiply:Calculator=(a:number,b:number)=>a*b;
// multiply.operation="Multipication"
// console.log(`Operation:${add.operation} , Result:${add(12,3)}`)
// console.log(`Operation:${multiply.operation}, Result:${multiply(3,4)}`)