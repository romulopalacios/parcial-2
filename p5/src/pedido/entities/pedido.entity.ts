import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'usuarios' })
export class PedidoEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    idPlato: number;

    @Column()
    idMesero: number;

    @Column()
    fecha: string;

    @Column()
    mesa: number;

    @Column()
    cantidad: number;

    @Column()
    precio: number;
}
