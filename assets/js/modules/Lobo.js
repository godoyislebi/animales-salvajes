import Animal from "./Animal.js";

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    // Método aullar
    aullar() {
        console.log("¡Auuu!");
    }
}

export default Lobo