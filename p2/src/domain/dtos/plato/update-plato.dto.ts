
export class UpdatePlatoDto {
    private constructor(
        public readonly id: number,
        public readonly nombre?: string,
        public readonly estado?: string
    ) { }

    static create(props: { [key: string]: any }): [string?, UpdatePlatoDto?] {
        const { id, nombre, estado } = props;

        if (!id) return ['ID property is required', undefined];

        return [undefined, new UpdatePlatoDto(id, nombre, estado)];
    }
}
