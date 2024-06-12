export class PlatoEntity {
    constructor(
        public id: number,
        public nombre: string,
        public estado: string = 'Activo'
    ) { }

    public static fromObject(object: { [key: string]: any }): PlatoEntity {
        const { id, nombre, estado } = object;
        if (!id) throw 'Id is required';
        if (!nombre) throw 'Nombre is required';

        let newNombre;
        if (nombre) {
            newNombre = nombre.toUpperCase();
            if (newNombre !== nombre) {
                throw 'Nombre must be uppercase';
            }
        }
        return new PlatoEntity(id, nombre, estado);
    }
}
