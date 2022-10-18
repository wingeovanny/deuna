import { IsNumber, IsString } from "class-validator";

export class UpdateProductoDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly status: number;
}
