export const what=()=>{
    return `
    ABSTRACT CLASS
        It’s a good practice to use abstract classes when you want to share code among some related classes.
    SUMMARY
        Abstract classes cannot be instantiated.
        An Abstract class has at least one abstract method.
        To use an abstract class, you need to inherit it and provide the implementation for the abstract methods.


    abstract class Product{
    static allProduct:number=0
    constructor(private name:string,private category:string ){
        Product.allProduct++
    }
}
class SportProduct extends Product{
     constructor(name:string,category:string,private price:number){
        super(name,category,price)
     }
     getPrice():number{
        return this.price
     }
}
    `
} 
