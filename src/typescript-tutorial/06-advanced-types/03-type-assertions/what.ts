export const what=()=>{
    return `
    TYPE ASSERTIONS 
        In this tutorial , you will learn about type assertions in Typescript ,which allows you to assign a new type to a value . 
        Type assertions instruct the Typescript compiler to treat a value as a specified type .In Typescript , you can use the AS keyword or <> operator for type assertions .
    TYPE ASSERTIONS USING THE AS KEYWORD
        let a:typeA;
        let b=a as typeB;

        As I understood , you can as the type assertions in two ways . 
        The first is when assigning value as that type .
        The second is when accessing a value of the object .
         
        SUMMARY :
            const el =document.querySelector('input[type='text']');

            const input =el as HTMLInputElement;

            console.log(input.value)

            let enteredText=(el as HTMLInputElement).value
            
    TYPE ASSERTION USING THE <> OPERATOR 

        `
}