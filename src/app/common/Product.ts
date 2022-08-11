export class Product {
    id:number;
    name:string;
    image:string;
    price:number;
    sales:number;

    constructor( id:number, name:string, image:string,  price:number, sales:number){
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.sales = sales;
    }
}
