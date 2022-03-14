import Aguila from "./modules/Aguila.js";
import Leon from "./modules/Leon.js"
import Lobo from "./modules/Lobo.js"
import Oso from "./modules/Oso.js"
import Serpiente from "./modules/Serpiente.js"


const tablaAnimales = document.getElementById("tablaAnimales")
const animal = document.getElementById("animal")
const edad = document.getElementById("edad")
const comentarios = document.getElementById("comentarios")
const btnRegistrar = document.getElementById("btnRegistrar")
const preview = document.getElementById("preview")
const player = document.getElementById("player")
let arrayAnimales = [];


const getAnimales = (async () => {
    try{
        const URL = "./animales.json";
        const request = await fetch(URL);
        const data = await request.json();
        return data;
    }   catch (error) {
    console.error(error);
  }
})();


const dataAnimales = (async () => {
  const callGetAnimales = await getAnimales; // Arreglo de objetos // Necesita un await poque tiene que esperar la data de GetAnimales

  // Hacer lo que sea
  const funcionEncontrar = () => {
    const animal = arrayAnimales.find(({ name }) => name === animal.value);
    return animal;
  };

  animal.addEventListener("change", () => {
    preview.style.backgroundImage =
      "url(assets/imgs/" + funcionEncontrar().imagen + ")";
  });
})();

  
/** const dataAnimales = (async () => {
  const callGetAnimales = await getAnimales;
  });
  */

 // ¿Qué hacemos con los arreglos de objetos?
  // Lo recorremos o iteramos
  // 1. for normal
  // 2. for of
  // 3. .forEach()
  // 4. .map()
  // Dependiendo de lo que necesite o vaya a hacer
  // 5. .reduce()
  // 6. .filter()
  // 7. .find()
  // 8. .some()
  // 9. .every()
  // 10. .includes()
  // 11. .sort()
  // 12. .concat()


 
/* methods: {
    async getData() {
      try {
        const URL = "./data.json";  /*
        const request = await fetch(URL);
        const data = await request.json();
        this.trabajadoresEntel = data;
      } catch (error) {
        console.error(error);
      }
    },
  }, */
  