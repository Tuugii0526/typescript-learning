export const what=()=>{
    return `
    Overloaded signartures:

    function add(a:number,b:number):number;
    function add(a:string,b:string):string;

    function add(a:any,b:any):any{
        if(typeof a==='number' && typeof b==='number'){
        return a+b
        }
        else if(typeof a==='string' && typeof b==='string')
        {
        return a+b}
    }



    As I understood , function overloading allows us to enable a function to accept different types of arguments.
    When the one signature's argument's number differ from the other signature's argument's number , we use optional parameter.
        function sum(a: number, b: number): number;
        function sum(a: number, b: number, c: number): number;
        function sum(a: number, b: number, c?: number): number {
            if (c) return a + b + c;
            return a + b;
        }


    Above is function overloading . You can also use method overloading. 
    
    `
}