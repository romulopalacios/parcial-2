
export class UpdateMeseroDto {
    private constructor(
        public readonly id: number,
        public readonly nombre?: string,
        public readonly sueldo_basico?: number,
        public readonly nivel?: number,
        public readonly estado?: string
    ) {}

    static create(props: { [key: string]: any }): [string?, UpdateMeseroDto?] {
        const { id, nombre, sueldo_basico, nivel, estado } = props;

        if (!id) return ['ID property is required', undefined];

        return [undefined, new UpdateMeseroDto(id, nombre, sueldo_basico, nivel, estado)];
    }
}
