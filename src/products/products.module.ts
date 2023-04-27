import { Module } from "@nestjs/common";
import { MongooseModule, Schema } from "@nestjs/mongoose";
import {Product, ProductSchema} from "./product.model";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
  imports: [MongooseModule.forFeature([{name:'Product', schema: ProductSchema}])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductModule {};