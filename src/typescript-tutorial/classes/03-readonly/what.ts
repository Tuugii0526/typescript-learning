export const what=()=>{
    return `
    TypeScript provides the readonly modifier that allows you to mark the properties of a class immutable. The assignment to a readonly property can only occur in one of two places:

        *** In the property declaration.
        *** In the constructor of the same class.

        class Person{
            readonly birthDate:Date;
            contructor (birthDate:Date){
                this.birthDate=birthDate;    
            }
        }
        
        class Person{
            constructor(readonly birthDate:Date){
            }
        }
    `
}