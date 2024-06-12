import { CreateMeseroDto, UpdateMeseroDto } from "../dtos";
import { MeseroEntity } from '../entities/mesero.entity';

export abstract class MeseroRepository {
  abstract create(createMeseroDto: CreateMeseroDto): Promise<MeseroEntity>;
  abstract getAll(): Promise<MeseroEntity[]>;
  abstract findById(id: number): Promise<MeseroEntity>;
  abstract updateById(updatePedidoDto: UpdateMeseroDto): Promise<MeseroEntity>;
  abstract deleteById(id: number): Promise<MeseroEntity>;
}
