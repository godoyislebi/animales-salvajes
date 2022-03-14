import Animal from "./Animal.js";

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    //Método sisear
    sisear(){
        console.log("¡Sssss!");
    }
}

export default Serpiente