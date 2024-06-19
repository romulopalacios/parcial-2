import { Mesero } from "src/mesero/entities/mesero.entity";
import { Plato } from "src/plato/entities/plato.entity";
import { Column, Entity, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";

@Entity("pedido")
export class Pedido {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    fecha: string;

    @Column("integer")
    mesa: number;

    @Column("integer")
    cantidad: number;

    @Column("integer")
    precio: number;

    @Column("text", { default: "Activo" })
    estado: string;



    @ManyToOne(
        () => Mesero, 
        mesero => mesero.pedidos,
        {eager: true}
    )
    mesero: Mesero;


    @ManyToOne(
        () => Plato, 
        plato => plato.pedidos,
        {eager: true}
    )
    platos: Plato;
}
