import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProductoDto } from "./dto/createproducto.dto";
import { UpdateProductoDto } from "./dto/updateproducto.dto";
import { Producto } from "./Producto.entity";

@Injectable()
export class ProductoServices {

    constructor(

        @InjectRepository(Producto) private readonly _prodRepository: Repository<Producto>) { }

    async getProductos(): Promise<Producto[]> {

        return await this._prodRepository.find();
        //  return await this._prodRepository.find({ relations: ['tribus'] });

    }

    async getProducto(id: number): Promise<Producto> {

        const prod: Producto = await this._prodRepository.findOne({ where: { id } });

        if (!prod) {
            throw new NotFoundException("Producto no encontrado");
        }

        return prod;
    }


    async createProducto(data: CreateProductoDto) {

        const newPost = await this._prodRepository.save({
            name: data.name,
            status: data.status,

        });

        return newPost;


    }

    async updateProducto(id: number, req: UpdateProductoDto): Promise<Producto> {

        let toUpdate = await this._prodRepository.findOne({ where: { id } });
        if (!toUpdate) {
            throw new NotFoundException('Producto no encontrado');
        }

        let updated = Object.assign(toUpdate, req);

        return this._prodRepository.save(updated);

    }

    async removeProducto(id: number): Promise<any> {

        const prod: Producto = await this._prodRepository.findOne({ where: { id } });

        if (!prod) {
            throw new NotFoundException('Producto no encontrado');
        }

        this._prodRepository.remove(prod);

    }


}

