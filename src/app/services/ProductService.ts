import { Product } from "../common/Product";

export class ProductService {
    public getProducts(){
        let products:Product[];

        products = [
            new Product(1,'CÂY MỘC HƯƠNG', 'image1.jpg',32000,30000),
            new Product(2,'CÂY HOA MÓNG CỌP XANH', 'image2.jpg',190000,180000),
            new Product(3,'CÂY PHƯỢNG TÍM', 'image3.jpg',150000,100000),
            new Product(4,'CÂY MAI XANH THÁI', 'image4.jpg',520000,500000),
            new Product(5,'CÂY LINH SAM SIÊU', 'image5.jpg',22000,20000),
            new Product(6,'CÂY LAN HOÀNG DƯƠNG', 'image6.jpg',210000,190000),
            new Product(7,'CÂY CHERRY BRAZIL', 'image7.jpg',320000,300000),
            new Product(8,'CÂY LỰU ĐỎ - ẤN ĐỘ', 'image8.jpg',200000,199000),
            new Product(9,'CÂY ỔI NỮ HOÀNG', 'image9.jpg',190000,170000),
            new Product(10,'CÂY ỔI SẺ LÁ RÍ', 'image10.jpg',170000,160000),
            new Product(11,'NHO THÂN GỖ', 'image11.jpg',380000,350000),
            new Product(12,'CÂY CÓC THÁI', 'image12.jpg',160000,140000),
        ];

        return products;
    }
}
