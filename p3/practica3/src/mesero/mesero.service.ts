import { Injectable } from '@nestjs/common';
import { CreateMeseroDto } from './dto/create-mesero.dto';
import { UpdateMeseroDto } from './dto/update-mesero.dto';
import { Repository } from 'typeorm';
import { Mesero } from './entities/mesero.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MeseroService {
  constructor(
    @InjectRepository(Mesero)
    private readonly meseroRepository: Repository<Mesero>
  ) {
    
  }
  async create(createMeseroDto: CreateMeseroDto) {
    const mesero = await this.meseroRepository.create(createMeseroDto);
    return this.meseroRepository.save(mesero);
  }

  async findAll() {
    return await this.meseroRepository.find();
  }

  async findOne(id: string) {
    return await this.meseroRepository.findOneBy({id});
  }

  async update(id: string, updateMeseroDto: UpdateMeseroDto) {
    const updated = await this.meseroRepository.update(id, updateMeseroDto);
    return updated.affected > 0 ? this.meseroRepository.findOneBy({id}) : null;
  }

  async remove(id: string) {
    const plato = await this.meseroRepository.findOne({ where: { id } });
    if (plato) {
      plato.estado = 'inactivo';
      return this.meseroRepository.save(plato);
    }
    return null;
  }
}
