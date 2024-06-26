import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMeseroInput } from './dto/create-mesero.input';
import { UpdateMeseroInput } from './dto/update-mesero.input';
import { Repository } from 'typeorm';
import { Mesero } from './entities/mesero.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MeserosService {
  constructor(
    @InjectRepository(Mesero)
    private readonly meseroRepository: Repository<Mesero>,
  ) {}

  async create(createMeseroInput: CreateMeseroInput): Promise<Mesero> {
    const newMesero = this.meseroRepository.create(createMeseroInput);
    return await this.meseroRepository.save(newMesero);
  }

  async findAll(estado: string): Promise<Mesero[]> {
    if (estado === 'activo' || estado === 'inactivo') {
      return this.meseroRepository.find({ where: { estado } });
    }
    return await this.meseroRepository.find();
  }

  async findOne(id: number): Promise<Mesero> {
    const mesero = await this.meseroRepository.findOneBy({ id });
    if (!mesero) throw new NotFoundException('Mesero not found');
    return mesero;
  }

  async update(id: number, updateMeseroInput: UpdateMeseroInput): Promise<Mesero> {
    const mesero = await this.meseroRepository.preload({
      id: id,
      ...updateMeseroInput,
    });

    if (!mesero) throw new NotFoundException(`Mesero with id: ${id} not found`);

    return this.meseroRepository.save(mesero);
  }

  async remove(id: number): Promise<Mesero> {
    const mesero = await this.meseroRepository.findOne({ where: { id } });
    if (mesero) {
      mesero.estado = 'inactivo';
      return this.meseroRepository.save(mesero);
    }
    return null;
  }
}
