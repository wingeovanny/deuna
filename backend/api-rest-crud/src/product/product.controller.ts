import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { ProductService } from "./product.service";

import { CreateProductDTO } from "./dto/product.dto";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }



}
