export const what=()=>{
    return `
        INTERFACE 
    The type annotation of the function argument makes the code difficult to read .By convention, the interface names are in the PascalCase .

    Interface is used to annotate an object . 

    interface Product{
    name:string,
    category:string,
    price:number
}
    const getIntro=({name,price}:Product)=>{
        return 
    }
    getIntro({name:'shoes',category:'boot',price:23})

        OPTIONAL PROPERTIES
    interface Product{
    name:string,
    category?:string,
    price:number
    }
    const adoptOptional =(product:Product)=>{
    if(product.category)
     {
    return  product name is (product.name) product category is (product.category) price is (product.price)
      }
    return product name is (product.name) price is (product.price)
    }
    
        READONLY PROPERTIES
        let student:Student;
    interface Student {
    readonly id:number,
    name:string,
    age:number
    }

    student={
    id:12434,
    name:'Tuugii',
    age:20
    }

        FUNCTION TYPES
    Not only interface can describe an object with properties , but also can function types .
 
    Note that parameter names don't need to match the function signature .

    interface tugrugToDollar {
        (dollarQuantity:number,tugrugEqualToOneDollar:number):number 
    }
    const  getTugrug:tugrugToDollar;
    getTugrug=(dollarQuantity:number,tugrugEqualToOneDollar:number)=>{
    return tugrugEqualToOneDollar*number;
    }

    getTugrug(34,3400);

   
    let getTugrugTwo:tugrugToDollar;
    getTugrugTwo =(dollar:number,tugrug:number)=>{
    return dollar*tugrug

        CLASS TYPES
    interface  Json{
        toJson():string;    
    }
    
    class Person implements Json {
        constructor(private firstName:string,private lastName:string){}
        toJson():string{
            return JSON.stringify(this)
        }
    }

    SUMMARY:
    TypeScript interfaces define contracts in your code and provide explicit names for type-checking.
Interfaces may have optional properties or read-only properties.
Interfaces can be used as function types.
Interfaces are typically used as class types that make a contract between unrelated classes.

interface ProductInterface{
    getName():string
}
class Product implements ProductInterface {
     constructor(private name:string){}
     getName(): string {
         return this.name
     }
}


    `
}


