
import { CreatePedidoDto, PedidoDatasource, PedidoEntity, PedidoRepository, UpdatePedidoDto} from '../../domain';


export class PedidoRepositoryImpl implements PedidoRepository {

  constructor(
    private readonly datasource: PedidoDatasource,
  ) { }

  create(createPedidoDto: CreatePedidoDto): Promise<PedidoEntity> {
    return this.datasource.create(createPedidoDto);
  }

  getAll(): Promise<PedidoEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<PedidoEntity> {
    return this.datasource.findById(id);
  }

  updateById(updatePedidoDto: UpdatePedidoDto): Promise<PedidoEntity> {
    return this.datasource.updateById(updatePedidoDto);
  }

  deleteById(id: number): Promise<PedidoEntity> {
    return this.datasource.deleteById(id);
  }
}