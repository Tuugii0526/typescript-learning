export const what=()=>{
    return `
    To extend an interface ,you use the extends keyword .
   
    USING EXTENDS KEYWORD 
        interface Mailable {
            send(email:string):boolean
            queue(email:string):boolean
                            }
        interface FutureMailable extends Mailable {
            later (email:string,after:number):void
                                                    }

    INTERFACES EXTENDING MULTIPLE CLASSES
        An interface can extend multiple interfaces ,creating a combination of all the interfaces .
         
        interface a {
        a():void;
        }
        interface b{
            b():void
        }
        interface d extends a,b{
            d():void
            }

    INTERFACES EXTENDING CLASSES
        

   * An interface can extend one or multiple existing interfaces.
   
   * An interface also can extend a class. If the class contains private or protected members, the interface can only be implemented by the class or subclasses of that class.
    `
}

