"use strict";
// import * as readline from "readline";
// class Programa {
//     private rl: readline.Interface;
//     constructor(){
//         this.rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout 
//         })
//     }
//     iniciar(): void {
//         this.pedirNumero();
//     }
//     pedirNumero(): void {
//         this.rl.question("Ingrese un numero: ", (respuesta: string) =>{
//             const numero = Number(respuesta);
//             this.evaluarNumero(numero);
//             this.cerrar();
//         })
//     }
//     evaluarNumero(numero: number): void {
//         if (numero > 10) {
//             console.log("Es mayor a 10");
//         } else if (numero === 10) {
//             console.log("Es igual a 10")
//         } else {
//             console.log("Es menor a 10")
//         }
//     }
//     cerrar(): void {
//         this.rl.close();
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const app = new Programa();
// app.iniciar();
////////////////// EJERCICIO 1 /////////////////////
const readline = require("readline");
class notas {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar() {
        this.pedirNota();
    }
    pedirNota() {
        this.rl.question("ingrese su nota: ", (respuesta) => {
            const numero = Number(respuesta);
            this.evaluarNota(numero);
            this.cerrar();
        });
    }
    evaluarNota(numero) {
        if (numero >= 9 && numero <= 10) {
            console.log("Exelente");
        }
        else if (numero >= 7 && numero <= 8.9) {
            console.log("Bueno");
        }
        else if (numero >= 6 && numero <= 6.9) {
            console.log("Regular");
        }
        else if (numero < 6) {
            console.log("Reprobado");
        }
    }
    cerrar() {
        this.rl.close();
    }
}
const a = new notas();
a.iniciar();
// ////////////// EJERCICIO 2 //////////////////
// import * as readline from "readline";
// class Usuario {
//     private rl: readline.Interface;
//     constructor(){
//         this.rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         })
//     }
//     iniciar(): void{
//         this.pedirusuario();
//         this.pedirContraseña();
//     }
//     pedirUsuario(): void{
//         this.rl.question("Ingrese su Usuario: ",(respuesta: string)=>{
//             this.rl.question("Ingrese si Contraseña: ", (respuesta: string)=>{
//                 const user = nu
//             })
//         } )
//     }
// }
//# sourceMappingURL=index11.js.map