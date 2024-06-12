export class CreatePedidoDto {
    private constructor(
        public readonly platoId: number,
        public readonly meseroId: number,
        public readonly fecha: string,
        public readonly mesa: number,
        public readonly cantidad: number,
        public readonly precio: number,
        public readonly estado: string = 'Activo'
    ) {}

    static create(props: { [key: string]: any }): [string?, CreatePedidoDto?] {
        const { platoId, meseroId, fecha, mesa, cantidad, precio, estado } = props;

        if (platoId === undefined) return ['Plato ID is required', undefined];
        if (meseroId === undefined) return ['Mesero ID is required', undefined];
        if (!fecha) return ['Fecha is required', undefined];
        if (mesa === undefined) return ['Mesa is required', undefined];
        if (cantidad === undefined) return ['Cantidad is required', undefined];
        if (precio === undefined) return ['Precio is required', undefined];

        return [undefined, new CreatePedidoDto(platoId, meseroId, fecha, mesa, cantidad, precio, estado)];
    }
}
