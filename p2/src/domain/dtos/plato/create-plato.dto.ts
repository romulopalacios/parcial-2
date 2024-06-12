
export class CreatePlatoDto {
    private constructor(
      public readonly nombre: string,
      public readonly estado: string = 'Activo'
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreatePlatoDto?] {
      const { nombre, estado } = props;
  
      if (!nombre) return ['Nombre property is required', undefined];
  
      return [undefined, new CreatePlatoDto(nombre, estado)];
    }
  }
  