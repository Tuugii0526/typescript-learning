export const what=()=>{
    return `
    Iam  wondering why they are using never as function return . Probably this is to indicate the impossibility.

    let add:(x:number,y:number)=>number;
    add=function(x:number,y:number){
    return x+y
    }

    let add:(x:number,y:number)=>number=function(x:number,y:number){
    return x+y
    }
    `
}