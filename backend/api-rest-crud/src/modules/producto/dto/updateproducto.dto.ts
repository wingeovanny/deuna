import { IsNumber, IsString } from "class-validator";

export class UpdateProductoDto {
    @IsString()
    readonly nombre: string;
    @IsString()
    readonly descripcion: string;
    @IsNumber()
    readonly precio: number;
}
