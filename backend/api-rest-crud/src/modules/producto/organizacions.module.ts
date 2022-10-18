import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoController } from './Producto.controller';
import { Producto } from './Producto.entity';
import { ProductoServices } from './Producto.service';

@Module({
    imports: [TypeOrmModule.forFeature([Producto])],
    providers: [ProductoServices],
    controllers: [ProductoController],
})
export class ProductosModule { }
