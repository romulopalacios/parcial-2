import { Router } from 'express';
import { PlatoController } from './controller.ddd';
import { PlatoDatasourceImpl } from "../../infraestructure/datasource/plato.datasource.impl";
import { PlatoRepositoryImpl } from '../../infraestructure/repositories/plato.repository.impl';
//import { PlatoRepository } from '../../domain';


export class PlatoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new PlatoDatasourceImpl();
    const platoRepository = new PlatoRepositoryImpl( datasource );
    const platoController = new PlatoController( platoRepository );

    router.get('/', platoController.getPlato );
    router.get('/:id', platoController.getPlatoById );
    
    router.post('/', platoController.createPlato );
    router.put('/:id', platoController.updatePlato );
    router.delete('/:id', platoController.deleteTodo );


    return router;
  }


}

