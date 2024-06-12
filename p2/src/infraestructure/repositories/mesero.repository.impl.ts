
import { CreateMeseroDto, MeseroDatasource, MeseroEntity, MeseroRepository, UpdateMeseroDto} from '../../domain';


export class MeseroRepositoryImpl implements MeseroRepository {

  constructor(
    private readonly datasource: MeseroDatasource,
  ) { }

  create(createMeseroDto: CreateMeseroDto): Promise<MeseroEntity> {
    return this.datasource.create(createMeseroDto);
  }

  getAll(): Promise<MeseroEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<MeseroEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateMeseroDto: UpdateMeseroDto): Promise<MeseroEntity> {
    return this.datasource.updateById(updateMeseroDto);
  }

  deleteById(id: number): Promise<MeseroEntity> {
    return this.datasource.deleteById(id);
  }
}