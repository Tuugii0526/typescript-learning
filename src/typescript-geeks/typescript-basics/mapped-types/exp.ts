// type MapType<Interface>={
//     readonly [P in keyof Interface]:Interface[P];
// }
// interface Person{
//     name:string;
//     age:number
// }
// type ReadOnlyPerson=MapType<Person>
// const person:ReadOnlyPerson={
//     name:"Tuugii",
//     age:20
// }
// interface Product{
//     name:string;
//     number:string
// }
// type NewNumberTypeProduct<Interface>={
//     [Key in keyof Interface as Capitalize<string & Key>]?:number
// }