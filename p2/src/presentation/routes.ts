import { Router } from "express";

import { PlatoRoutes } from "./plato/routes";
import { MeseroRoutes } from "./mesero/routes";
import { PedidoRoutes } from "./pedido/routes";
import { GithubRoutes } from "./github/github.routes";

export class AppRoutes { 

    static get routes(): Router {
        const router = Router();

        router.use('/platos', PlatoRoutes.routes);
        router.use('/meseros', MeseroRoutes.routes);
        router.use('/pedidos', PedidoRoutes.routes);


        //github
        router.use('/github', GithubRoutes.routes );
        return router;
    }
}