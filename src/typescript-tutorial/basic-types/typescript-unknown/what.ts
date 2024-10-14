export const what=()=>{
    return `
    It seems interesting to me . Probably it is the best example I have encountered. 
    If a value is of an unknown type , we can assign it any value. But ...


    let value:unknown;
    value=[1,2,3]
    let result=value.reduce((acc:number,elm:number)=>acc+elm,0)
    ERROR !!!

    the correction is:

    let value:unknown;
    value=[1,2,3]
    let result=value.(value as number[]).reduce((acc:number,elm:number)=>acc+elm,0)


    any VS unknown
    common scenarios:
        any:Used for migrating JavaScript codebase to TypeScript.

        unknown:Used when handling data from external sources (API calls, databases, ..) where type validation is necessary.

    Summary
The unknown type is like any type but more restrictive.
Use the unknown type to handle data coming from external sources and requires validation before use.
    `
}
