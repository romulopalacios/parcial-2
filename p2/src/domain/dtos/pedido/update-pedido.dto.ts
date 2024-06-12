export class UpdatePedidoDto {
    private constructor(
        public readonly id: number,
        public readonly platoId?: number,
        public readonly meseroId?: number,
        public readonly fecha?: string,
        public readonly mesa?: number,
        public readonly cantidad?: number,
        public readonly precio?: number,
        public readonly estado?: string
    ) {}

    static create(props: { [key: string]: any }): [string?, UpdatePedidoDto?] {
        const { id, platoId, meseroId, fecha, mesa, cantidad, precio, estado } = props;

        if (!id) return ['ID property is required', undefined];

        return [undefined, new UpdatePedidoDto(id, platoId, meseroId, fecha, mesa, cantidad, precio, estado)];
    }
}
