import Animal from "./Animal.js";

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    // Método gruñir
    grunir(){
        console.log("¡Grrr!");
    }
}

export default Oso