import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Query,
  Req,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number
  ) {
    const product = await this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice
    );
    return { status: 'success', data: product };
  }

  @Get()
  async getAllProducts() {
    const products = await this.productsService.getAllProducts();
    return { status: 'success', data: products };
  }
  @Get(':id')
  async getProduct(@Param('id') id: string) {
    const product = await this.productsService.getProduct(id);
    return { status: 'success', data: product };
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() data: any) {
    const updatedProduct = await this.productsService.updateProduct(id, data);
    return { status: 'success', data: updatedProduct };
  }

  @Delete(':id')
  async eleteProduct(@Param('id') id: string) {
    await this.productsService.deleteProduct(id);
    return { status: 'success', data: null };
  }
}
