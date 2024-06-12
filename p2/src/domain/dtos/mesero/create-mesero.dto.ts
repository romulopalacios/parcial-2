
export class CreateMeseroDto {
    private constructor(
        public readonly nombre: string,
        public readonly sueldo_basico: number,
        public readonly nivel: number,
        public readonly estado: string = 'Activo'
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateMeseroDto?] {
        const { nombre, sueldo_basico, nivel, estado } = props;

        if (!nombre) return ['Nombre property is required', undefined];
        if (sueldo_basico === undefined) return ['Sueldo basico property is required', undefined];
        if (nivel === undefined) return ['Nivel property is required', undefined];

        return [undefined, new CreateMeseroDto(nombre, sueldo_basico, nivel, estado)];
    }
}
