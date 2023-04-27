import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>
  ) {}

  async insertProduct(title: string, description: string, price: number) {
    const newProduct = await this.productModel.create({
      title,
      description,
      price,
    });
    return newProduct;
  }

  async getAllProducts() {
    const products = await this.productModel.find();
    return products;
  }

  async getProduct(id: string) {
    const product = await this.productModel.findById(id);
    if (!product)
      throw new NotFoundException(`No product found with this id ${id}`);
    return product;
  }

  async updateProduct(id: string, data: Product) {
    const updatedProduct = await this.productModel.findByIdAndUpdate(id, {
      ...data,
    });
    if (!updatedProduct) throw new NotFoundException('Product not found!');
    return updatedProduct;
  }

  async deleteProduct(id: string) {
    const product = await this.productModel.findByIdAndDelete(id);
    if (!product) throw new NotFoundException('Product not found');
    return null;
  }
}
