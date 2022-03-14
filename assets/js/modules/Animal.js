// Clase padre animal
class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        this.__nombre = () => nombre();
        this.__edad = () => edad();
        this.__img = () => img();
        this.__comentarios = () => comentarios();
        this.__sonido = () => sonido();
    }
    get nombre(){
        return this.__nombre;
    }
    get edad(){
        return this.__edad;
    }
    get img(){
        return this.__img;
    }
    set comentarios(comentarios){
        this.__comentarios = () => comentarios();
    }
    set sonido(sonido){
        this.__sonido = () => sonido();
    }
}

export default Animal;