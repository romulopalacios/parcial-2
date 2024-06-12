export class MeseroEntity {
    constructor(
        public id: number,
        public nombre: string,
        public sueldo_basico: number,
        public nivel: number,
        public estado: string = 'Activo'
    ) {}

    public static fromObject(object: { [key: string]: any }): MeseroEntity {
        const { id, nombre, sueldo_basico, nivel, estado } = object;

        if (!id) throw 'Id is required';
        if (!nombre) throw 'Nombre is required';
        if (sueldo_basico === undefined) throw 'Sueldo_basico is required';
        if (nivel === undefined) throw 'Nivel is required';

        let newNombre;
        if (nombre) {
            newNombre = nombre.toUpperCase();
            if (newNombre !== nombre) {
                throw 'Nombre must be uppercase';
            }
        }

        return new MeseroEntity(id, nombre, sueldo_basico, nivel, estado);
    }
}
