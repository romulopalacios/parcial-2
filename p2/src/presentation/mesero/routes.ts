import { Router } from 'express';
import { MeseroController } from './controller.ddd';
import { MeseroDatasourceImpl } from "../../infraestructure/datasource/mesero.datasource.impl";
import { MeseroRepositoryImpl } from '../../infraestructure/repositories/mesero.repository.impl';
//import { MeseroRepository } from '../../domain';

export class MeseroRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new MeseroDatasourceImpl();
    const meseroRepository = new MeseroRepositoryImpl(datasource);
    const meseroController = new MeseroController(meseroRepository);

    router.get('/', meseroController.getMesero);
    router.get('/:id', meseroController.getMeseroById);
    router.post('/', meseroController.createMesero);
    router.put('/:id', meseroController.updateMesero);
    router.delete('/:id', meseroController.deleteMesero);

    return router;
  }
}
