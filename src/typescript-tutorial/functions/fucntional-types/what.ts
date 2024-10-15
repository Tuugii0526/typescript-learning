export const what=()=>{
    return `
    let add:(x:number,y:number)=>number;
    add=function(x:number,y:number){
    return x+y
    }

    let add:(x:number,y:number)=>number=function(x:number,y:number){
    return x+y
    }
    `
}