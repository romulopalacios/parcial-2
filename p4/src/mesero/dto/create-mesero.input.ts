import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsInt, IsOptional } from 'class-validator';

@InputType()
export class CreateMeseroInput {
  
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  nombre?: string;

  @Field(() => Int)
  @IsInt()
  sueldo_basico: number;

  @Field(() => Int)
  @IsInt()
  nivel: number;

  @Field(() => String, { nullable: true })
  @IsString()
  estado: string="activo";
}
