export const what=()=>{
    return `
    class Product{
        private name:string;
        private category:string;
        private price:number;

        constructor(name:string,category:string,price:number){
            this.name=name;
            this.category=category;
            this.price=price;
        }
         
        public get name(){
            return this.name
        }
        public set name(name:string){
            this.name=name 
        }
        
        public get price(){
            return this.price    
        }
        
        public set price (price:string){
            this.price= price
        }
    }

    `
}