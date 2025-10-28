/*const listadecompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1,
};

for (fruta in listadecompras) {
    console.log(fruta);
}

for (fruta in listadecompras) {
    console.log(`${fruta} : ${listadecompras[fruta]}`);
}               

*/
/*

function calculateDiscountdPrice (price, discountpercentage) {
    const discount = (price * discountpercentage) / 100;
    const finalprice = price - discount;
    return pricewithdiscount = price - discount;
}
const originalprice = 100
const discountpercentage = 20               
const finalprice = calculateDiscountdPrice(originalprice, discountpercentage);

console.log(`original price: $` + originalprice);
console.log(`discount percentage: ` + discountpercentage + `%`);
console.log(`final price: $` + finalprice);

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log(this.name)
    }

}

rocket.launchMessage()

*/
/*
const greeting = (name) => {
    return `Hello, ${name}`
};

const newGreeting = (name) => `Hello, ${name}`;

const resultfun1 = greeting('Daniel');
const resultfun2 = newGreeting('Daniel');

console.log(`resultfun1=`, resultfun1);
console.log(`resultfun2=`, resultfun2);

*/
/*
const persona = {
    nombre: 'daniel',
    edad: 32,
    direccion: {
        calle: 'Calle Falsa 123',
        ciudad: 'Springfield',
        pais: 'USA'
    }
};
*/

class Persona {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const personal = new Persona('Daniel', 32);
personal.saludar();
