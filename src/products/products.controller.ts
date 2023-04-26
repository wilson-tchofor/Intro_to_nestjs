import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductsService) { }
    
    @Post()
    addProduct(@Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number): any{
        const product = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return { status:'success', data:product };
    }

    @Get()
    getAllProducts() {
        return {status:'success',products: this.productsService.getProducts()};
    }
    @Get(':id')
    getProduct(@Param('id') id: string) {
        return {status: 'success', data: this.productsService.getProduct(id)}
    }

    @Patch(":id")
    updateProduct(@Param('id') id: string, @Body() data: any) {
        return {status:'success', data: this.productsService.updateProduct(id,data)}
    }

    @Delete(":id")
    deleteProduct(@Param('id') id: string) {
        return { status: 'success', data: this.productsService.deleteProduct(id) };
    }
}