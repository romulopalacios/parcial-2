import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { PlatosService } from './plato.service';
import { Plato } from './entities/plato.entity';
import { CreatePlatoInput } from './dto/create-plato.input';
import { UpdatePlatoInput } from './dto/update-plato.input';

@Resolver(() => Plato)
export class PlatosResolver {
  constructor(private readonly platosService: PlatosService) {}

  @Mutation(() => Plato)
  async createPlato(@Args('createPlatoInput') createPlatoInput: CreatePlatoInput): Promise<Plato> {
    return this.platosService.create(createPlatoInput);
  }

  @Query(() => [Plato], { name: 'platos' })
  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.platosService.findAll(estado);
  }

  @Query(() => Plato, { name: 'plato' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Plato> {
    return this.platosService.findOne(id);
  }

  @Mutation(() => Plato)
  updatePlato(@Args('updatePlatoInput') updatePlatoInput: UpdatePlatoInput): Promise<Plato> {
    return this.platosService.update(updatePlatoInput.id, updatePlatoInput);
  }

  @Mutation(() => Plato)
  removePlato(@Args('id', { type: () => ID }) id: number): Promise<Plato> {
    return this.platosService.remove(id);
  }
}
