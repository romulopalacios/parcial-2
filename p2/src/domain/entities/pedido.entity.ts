export class PedidoEntity {
    constructor(
        public id: number,
        public platoId: number,
        public meseroId: number,
        public fecha: string,
        public mesa: number,
        public cantidad: number,
        public precio: number,
        public estado: string = 'Activo'
    ) {}

    public static fromObject(object: { [key: string]: any }): PedidoEntity {
        const { id, platoId, meseroId, fecha, mesa, cantidad, precio, estado } = object;

        if (!id) throw 'Id is required';
        if (platoId === undefined) throw 'PlatoId is required';
        if (meseroId === undefined) throw 'MeseroId is required';
        if (!fecha) throw 'Fecha is required';
        if (mesa === undefined) throw 'Mesa is required';
        if (cantidad === undefined) throw 'Cantidad is required';
        if (precio === undefined) throw 'Precio is required';

        return new PedidoEntity(id, platoId, meseroId, fecha, mesa, cantidad, precio, estado);
    }
}
