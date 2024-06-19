import { Injectable } from '@nestjs/common';
import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';
import { Repository } from 'typeorm';
import { Plato } from './entities/plato.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlatoService {
  constructor(
    @InjectRepository(Plato)
    private readonly platoRepository: Repository<Plato>
  ) {
    
  }
  
  async create(createPlatoDto: CreatePlatoDto) {
    const plato = this.platoRepository.create(createPlatoDto);
    return this.platoRepository.save(plato);
  }

  async findAll() {
    return this.platoRepository.find({ where: { estado: 'activo' } });
  }

  async findOne(id: string) {
    return this.platoRepository.findOne({ where: { id, estado: 'activo' } });
  }

  async update(id: string, updatePlatoDto: UpdatePlatoDto) {
    const updated = await this.platoRepository.update(id, updatePlatoDto);
    return updated.affected > 0 ? this.platoRepository.findOne({ where: { id, estado: 'activo' } }) : null;
  }

  async remove(id: string) {
    const plato = await this.platoRepository.findOne({ where: { id } });
    if (plato) {
      plato.estado = 'inactivo';
      return this.platoRepository.save(plato);
    }
    return null;
  }
}
