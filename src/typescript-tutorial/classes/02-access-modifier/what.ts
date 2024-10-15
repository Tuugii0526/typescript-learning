export const what=()=>{
    return `
    PRIVATE MODIFIER
        The private modifier limits the visibility to the same class only. When you add the private modifier to a property or method, you can access that property or method within the same class. Any attempt to access private properties or methods outside the class will result in an error at compiled time.
    PUBLIC MODIFIER
        The public modifier allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.

        It has the same effect as if the public keyword were omitted.
    PROTECTED MODIFIER
        The protected modifier allows properties and methods of a class to be accessible within the same class and subclasses.

        When a class (child class) inherits from another class (parent class), it is a subclass of the parent class.

        The TypeScript compiler will issue an error if you attempt to access the protected properties or methods from anywhere else
    EXAMPLE
        

    `
}