export class Producto {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;

    constructor(nombre: string, descripcion: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}
