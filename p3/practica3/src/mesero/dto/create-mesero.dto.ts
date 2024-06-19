import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateMeseroDto {
    
    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    @MinLength(1, { message: 'El nombre debe tener al menos 1 carácter.' })
    nombre: string;

    @IsNumber()
    sueldo: number;
    
    @IsNumber()
    nivel: number;

    @IsString()
    estado: string="Activo";
}
