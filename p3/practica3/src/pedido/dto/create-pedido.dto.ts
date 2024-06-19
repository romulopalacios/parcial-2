import { IsDateString, IsEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";


export class CreatePedidoDto {

    @IsString()
    @IsOptional()
    id: string;

    @IsDateString({}, { message: 'La fecha debe ser una cadena de texto con un formato de fecha válido.' })
    fecha: string;

    @IsNumber()
    mesa: number;

    @IsNumber()
    cantidad: number;

    @IsNumber()
    precio: number;


    @IsString()
    idPlato: string;

    @IsString()
    idMesero: string;

    @IsString()
    estado: string="Activo";
}
