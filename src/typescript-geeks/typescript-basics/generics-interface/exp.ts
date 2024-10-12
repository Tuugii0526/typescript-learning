// function getArray<Type>(array:Type[]){
// return array
// }
// getArray([1,23,'hi '])
// function getNumArr(array:number[]){
//     return array
// }
// getNumArr([1,2,])

// function getInfo<N,I>(name:N,id:I){
//   console.log(`name is ${name} id:${id}`)
// }
// getInfo('hi',3)

// interface person <T>{
//     hobbies:T[];
//     id:number
// }
// const person:person<string>={
//     hobbies:['basketball'],
//     id:3
// }

// //Constraints generics
// interface props<T extends {id:number}>{
// 	data:T[]
// }

// // Here the object must have id property
// interface objectProps{
// 	id:number,
// 	name:string,
// 	SN:number
// }

// // Passing objectProps as a type containing id
// let customData : props<objectProps> =
// 	{data:[{id:123,name:"John",SN:4324342}]}

// console.log(customData);
