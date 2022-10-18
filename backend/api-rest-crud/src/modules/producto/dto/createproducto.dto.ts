import { IsNumber, IsObject, IsString } from "class-validator";

export class CreateProductoDto {

    @IsString()
    readonly name: string;

    @IsNumber()
    readonly status: number;



}