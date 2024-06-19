import { Pedido } from "src/pedido/entities/pedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("plato")
export class Plato {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    nombre: string;

    @Column("text", { default: "activo" })
    estado: string;

    @OneToMany(
        () => Pedido, 
        pedido => pedido.platos,
        {cascade: true}
    )
    pedidos: Pedido[];
}
