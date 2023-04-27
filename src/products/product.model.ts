import {Schema}from 'mongoose';

export const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide title'],
    },
    description: {
      type: String,
      required: [true, 'Plese provide product description'],
    },
    price: {
      type: Number,
      required: [true, 'Product must have a price'],
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

export interface Product {
     id: String;
     title: String;
     description: String;
     price: Number;
}
