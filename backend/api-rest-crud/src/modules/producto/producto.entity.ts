import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity('Producto')
export class Producto {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 50, nullable: false })
    nombre: string;

    @Column({ length: 50, nullable: false })
    descripcion: string;

    @Column({ nullable: false })
    precio: number;

}