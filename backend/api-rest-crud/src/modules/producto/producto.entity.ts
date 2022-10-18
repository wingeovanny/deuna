import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity('Producto')
export class Producto {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ nullable: false })
    status: number;



}