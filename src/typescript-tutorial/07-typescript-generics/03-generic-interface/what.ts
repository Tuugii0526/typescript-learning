export const what=()=>{
    return `
    What really left to me  is that we can generic with the interface .


    `
}
interface Pair<K,V>{
    key:K,
    value:V
}
let month:Pair<string,number>={
key:'february',
value:2
}
interface Collection <T>{
    add(o:T):void;
    remove(o:T):void
}
class List <T> implements Collection <T>{
    private items:T[]=[]
    add(o:T):void{
        this.items.push(o)
    }
    remove(o:T):void{
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}