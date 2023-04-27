import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService{ 
    private products: Product[] = [];

    insertProduct(title: string, description: string, price: number) :Product {
        const id = Date.now().toString();
        const newProduct = new Product(id, title, description, price);
        this.products.push(newProduct);
        return newProduct;
    }

    getProducts() {
        const products = [...this.products];
        if (!products) throw new NotFoundException('No products found');
        return products;
    }

    getProduct(id: string) {
        const product = this.products.find(product => product.id === id);
        if (!product) throw new NotFoundException(`No product found with this id ${id}`);
        return product;
    }

    updateProduct(id: string, data: Product) {
        const index = this.products.findIndex(product => product.id === id);
        if (index<0) throw new NotFoundException("Product not found!");
        this.products[index] = { ...this.products[index], ...data };
        return this.products[index];
    }

    deleteProduct(id: string): void {
        const index = this.products.findIndex(product => product.id === id);
        if (index<0) throw new NotFoundException('Product not found');
        this.products.splice(index,1);
    }
}