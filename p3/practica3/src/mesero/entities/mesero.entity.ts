import { Pedido } from "src/pedido/entities/pedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("mesero")
export class Mesero {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    nombre: string;

    @Column("integer")
    sueldo: number;

    @Column("integer")
    nivel: number;

    @Column("text", { default: "Activo" })
    estado: string;

    @OneToMany(
        () => Pedido, 
        pedido => pedido.mesero,
        {cascade: true}
    )
    pedidos: Pedido[];
}


