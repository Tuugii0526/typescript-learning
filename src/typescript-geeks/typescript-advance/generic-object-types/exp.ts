type KeyValuePair<T extends number|string| boolean>={
    key:string,
    value:T
}
const stringPair:KeyValuePair<string>={
    key:'step by step',
    value:'The success key'
}
