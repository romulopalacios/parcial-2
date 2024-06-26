import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { MeserosService } from './mesero.service';
import { Mesero } from './entities/mesero.entity';
import { CreateMeseroInput } from './dto/create-mesero.input';
import { UpdateMeseroInput } from './dto/update-mesero.input';

@Resolver(() => Mesero)
export class MeserosResolver {
  constructor(private readonly meserosService: MeserosService) {}

  @Mutation(() => Mesero)
  async createMesero(@Args('createMeseroInput') createMeseroInput: CreateMeseroInput): Promise<Mesero> {
    return this.meserosService.create(createMeseroInput);
  }

  @Query(() => [Mesero], { name: 'meseros' })
  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.meserosService.findAll(estado);
  }

  @Query(() => Mesero, { name: 'mesero' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Mesero> {
    return this.meserosService.findOne(id);
  }

  @Mutation(() => Mesero)
  updateMesero(@Args('updateMeseroInput') updateMeseroInput: UpdateMeseroInput): Promise<Mesero> {
    return this.meserosService.update(updateMeseroInput.id, updateMeseroInput);
  }

  @Mutation(() => Mesero)
  removeMesero(@Args('id', { type: () => ID }) id: number): Promise<Mesero> {
    return this.meserosService.remove(id);
  }
}