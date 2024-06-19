import { IsOptional, IsString, MinLength } from "class-validator";

export class CreatePlatoDto {

    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    estado: string="activo";
}
