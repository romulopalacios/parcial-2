import { CreatePlatoDto, UpdatePlatoDto } from "../dtos";
import { PlatoEntity } from "../entities/plato.entity";

// PlatoDatasource
export abstract class PlatoDatasource {
    abstract create(createPlatoDto: CreatePlatoDto): Promise<PlatoEntity>;
    abstract getAll(): Promise<PlatoEntity[]>;
    abstract findById(id: number): Promise<PlatoEntity>;
    abstract updateById(updatePlatoDto: UpdatePlatoDto): Promise<PlatoEntity>;
    abstract deleteById(id: number): Promise<PlatoEntity>;
  }
  