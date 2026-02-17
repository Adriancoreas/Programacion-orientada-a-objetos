"use strict";
////// EJERCICIO 1 ////
// class Usuario {
//     Nombre: string;
//     apellido: string;
//     telefono: number;
//     correo: string;
//     private codIndentificacion: number;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(Nombre:string, apellido: string, telefono: number, correo: string, codIdentificacion: number){
//         this.Nombre = Nombre ;
//         this.apellido = apellido;
//         this.telefono = telefono;
//         this.correo = correo;
//         this.codIndentificacion = codIdentificacion;
//     }
// }
// const u = new Usuario("Juan","Gonlazes",777777,"juan123@gmail.com", 12345)
// console.log(u);
////////// EJERCICIO 2 //////////////////
class producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    totaldescuento() {
        let descuento = 0.20;
        let iva = 0.13;
        let precIva = this.precio * iva;
        let precIvaTotal = precIva + this.precio;
        let precDesc = precIvaTotal - descuento;
        console.log(precDesc);
    }
}
const p = new producto("laptop", 50, 1);
console.log(p.totaldescuento());
/////////////// EJERCICIO 3 ////////////////
// class Edad {
//     age: number
//     constructor(age:number){
//         this.age = age;
//     }
//     public calcularEdad(): void{
//        if(this.age <= 2){
//             console.log("bebe");
//         }else if(this.age >= 2 && this.age <= 10 ){
//             console.log("niño/niña")
//         }else if(this.age >= 10 && this.age <= 14){
//             console.log("Preadolecente");
//         }else if(this.age >= 14 && this.age <= 17){
//             console.log("adolecente ");
//         }else if (this.age >= 18 && this.age <= 30){
//             console.log("Joven")
//         }else if (this.age >= 30 && this.age <= 50){
//             console.log("adulto")
//         }else{
//             console.log("adulto mayor")
//         }
//     }
// }
// const e = new Edad(43)
// console.log(e.calcularEdad())
//# sourceMappingURL=lab1.js.map