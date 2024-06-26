import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { CreateMeseroInput } from './create-mesero.input';

@InputType()
export class UpdateMeseroInput extends PartialType(CreateMeseroInput) {

  @Field(() => ID)
  @IsInt()
  id: number;
}