import { IsNumber, IsObject, IsString } from "class-validator";

export class CreateProductoDto {

    @IsString()
    readonly nombre: string;

    @IsString()
    readonly descripcion: string;

    @IsNumber()
    readonly precio: number;



}