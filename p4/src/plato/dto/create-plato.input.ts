import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class CreatePlatoInput {
  
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  nombre?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  estado: string="activo";
}