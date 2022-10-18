import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateProductoDto } from "./dto/createproducto.dto";
import { UpdateProductoDto } from "./dto/updateproducto.dto";
import { Producto } from "./Producto.entity";
import { ProductoServices } from "./Producto.service";

@Controller('producto')
export class ProductoController {

    constructor(private readonly orgService: ProductoServices) {

    }

    @Get()
    getProducto(): Promise<Producto[]> {
        return this.orgService.getProductos();
    }

    @Get(':id')
    getProductos(@Param('id') id: number): Promise<Producto> {

        return this.orgService.getProducto(id);

    }


    @Post()
    createProducto(@Body() data: CreateProductoDto): Promise<Producto> {
        console.log(data instanceof CreateProductoDto);

        return this.orgService.createProducto(data);
    }



    @Patch(':id')
    updateProducto(@Param('id') id: number, @Body() org: UpdateProductoDto): Promise<Producto> {

        let actOrg: any = org;

        return this.orgService.updateProducto(id, actOrg);

    }

    @Delete(':id')
    removeProducto(@Param('id') id: number): Promise<void> {
        return this.orgService.removeProducto(id);
    }
}