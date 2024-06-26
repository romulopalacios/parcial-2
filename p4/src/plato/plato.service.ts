import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlatoInput } from './dto/create-plato.input';
import { UpdatePlatoInput } from './dto/update-plato.input';
import { Repository } from 'typeorm';
import { Plato } from './entities/plato.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlatosService {
  findOneBy(arg0: { id: string; }): Plato | PromiseLike<Plato> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Plato)
    private readonly platoRepository: Repository<Plato>,
  ) { }

  async create(createPlatoInput: CreatePlatoInput): Promise<Plato> {
    const newPlato = this.platoRepository.create(createPlatoInput);
    return await this.platoRepository.save(newPlato);
  }

  async findAll(estado: string): Promise<Plato[]> {
    if (estado === 'activo' || estado === 'inactivo') {
      return this.platoRepository.find({ where: { estado } });
    }
    return await this.platoRepository.find();
  }

  async findOne(id: number): Promise<Plato> {
    const plato = await this.platoRepository.findOneBy({ id });
    if (!plato) throw new NotFoundException('Plato not found');
    return plato;
  }

  async update(id: number, updatePlatoInput: UpdatePlatoInput): Promise<Plato> {
    const plato = await this.platoRepository.preload({
      id: id,
      ...updatePlatoInput,
    });

    if (!plato) throw new NotFoundException(`Plato with id: ${id} not found`);

    return this.platoRepository.save(plato);
  }

  async remove(id: number): Promise<Plato> {
    const plato = await this.platoRepository.findOneBy({ id });
    if (plato) {
      plato.estado = 'inactivo';
      return this.platoRepository.save(plato);
    }
    return null;
  }
}
