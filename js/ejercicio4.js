class Animal {
    constructor(especie, habitat, edadMax) {
        this.especie = especie;
        this.habitat = habitat;
        this.edadMax = edadMax;
    }

    getDatos() {
        //return "La especie es "+this.especie+", su hábitat natural es "+this.habitat+" y su edad es "+this.edadMax;
        var array = [this.especie, this.habitat, this.edadMax];
        return array;
    }
}

class AnimalDomestico extends Animal {
    constructor(especie, habitat, edadMax, nombre, id, vacunado) {
        super(especie, habitat, edadMax);
        this.nombre = nombre;
        this.id = id;
        this.vacunado = vacunado;
    }

    getDatos() {
        //return super.getDatos()+". Su nombre es "+this.nombre+", con id "+this.id+" y su estado vacunado es "+this.vacunado; 
        var array = [this.especie, this.habitat, this.edadMax, this.nombre, this.id, this.vacunado];
        return array;
    }
}

class AnimalSalvaje extends Animal {
    constructor(especie, habitat, edadMax, cautivo, peligroExtincion) {
        super(especie, habitat, edadMax);
        this.cautivo = cautivo;
        this.peligroExtincion = peligroExtincion;
    }

    getDatos() {
        //return super.getDatos()+". Cautivo: "+this.cautivo+", peligo de extinción: "+this.peligroExtincion; 
        var array = [this.especie, this.habitat, this.edadMax, this.cautivo, this.peligroExtincion];
        return array;
    }
}

/*var animal = new Animal("leon", "sabana", 50);
var animalDomestico = new AnimalDomestico("gato", "casa", 20, "puerro", 11, true);
var animalSalvaje = new AnimalSalvaje("tigre", "selva", 30, true, false);*/
var animales = [];

function nuevaMascota() {
    let especie = prompt("Especie: ");
    let habitat = prompt("Habitat: ");
    let edad = Number(prompt("Edad: "));
    let nombre = prompt("Nombre: ");
    let id = prompt("Identificador: ");
    let vacunado = prompt("Vacunado: ");

    animales.push(new AnimalDomestico(especie, habitat, edad, nombre, id, vacunado));
}

function nuevoAnimalSalvaje() {
    let especie = prompt("Especie: ");
    let habitat = prompt("Habitat: ");
    let edad = Number(prompt("Edad: "));
    let cautivo = prompt("Cautivo: ");
    let peligroExtincion = prompt("Peligro extinción: ");

    animales.push(new AnimalSalvaje(especie, habitat, edad, cautivo, peligroExtincion));
}

function mostrarEdad() {

    animales.forEach((animal, i, animales) => {
        if (animal.edadMax > 10) {
            let nodo2 = document.createElement("p");
            nodo2.innerHTML = animal.getDatos();
            document.getElementById('divAnimales').appendChild(nodo2);
            console.log(animal.getDatos());
        }
    });
}


