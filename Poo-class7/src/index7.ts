// class usario {
//     public nombre: string;

//     constructor(nombre:string) {
//         this.nombre = nombre;
//     } 
// }

// const u = new usario ("Juan");
// console.log(u.nombre);

// class Usuario {
//     private password: string;

//     constructor(pass: string) {
//         this.password = pass;
//     }


// validar(pass: string): Boolean {
//     return this.password === pass;
//     }

// }

// const u = new Usuario ("12345");
// console.log(u.validar("12345"));


// /// Ejercicio 3

// class Persona {
//     protected edad: number;

//     constructor(edad: number ){
//         this.edad = edad;
//     }


// }

// class Estudiante extends Persona {
//     mostrarEdad(){
//         return this.edad;
//     }
// }

// const e = new Estudiante(20);
// console.log(e.edad);

/// ejercicio 1: usuario y validacion de acceso

// class Usuario {
//     public username: string;
//     private password: string;

//     constructor(username: string, password: string) {
//         this.username = username;
//         this.password = password;
//     }

//     login(pass: string): string {
//         if ( pass === this.password) {
//             return "Acceso concedido";
//         } else {
//             return "password falied"
//         }
//     }
// }

// const e = new Usuario("Juan", "12345")
// console.log(e.login("Juan","12345"))

/// ejercicio 2 
// class Producto {
//   constructor(
//     public nombre: string,
//     private precio: number
//   ) {}

//   evaluarPrecio(): string {
//     if (this.precio < 10) {
//       return "Producto barato";
//     } else if (this.precio <= 50) {
//       return "Precio normal";
//     } else {
//       return "Producto caro";
//     }
//   }
// }

// const p = new Producto ("laptop", 50);
// console.log(p.evaluarPrecio())


/// ejercicio 3
