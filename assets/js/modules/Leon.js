import Animal from "./Animal.js";

// Clase hija león
class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    // Método rugir
    rugir() {
        console.log("¡Groooaar!");
    }
}

export default Leon