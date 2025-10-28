const edad = prompt('Ingrese el la edad:');
function categoriaEdad(edad) {

    if (edad > 55) return 'adulto mayor';

    if (edad >= 18) return 'adulto';
    
    if (edad > 12) return 'joven';

    return 'niño';
}
const categoria = categoriaEdad(edad);

let subsidio = categoria === 'niño' || categoria === 'adulto mayor' ? 'si' : 'no';

console.log(`La categoría de la persona es: ${categoria} y tiene subsidio: ${subsidio}`);

const canasta = ['leche', 'pan', 'huevos', 'carne', 'verduras'];

canasta.forEach( (item, key) => { console.log('item=', item, ' key=', key) } );

const copiaCanasta = canasta.map( (item) => {
        if (item !== 'pan') {
            return `nuevo item ${item}` 
        } 
    }
);
const copiaCanasta2 = canasta.filter( (item) =>  item !== 'pan' );

console.log('copiaCanasta2=', copiaCanasta2);

const listadecompras = { 
    
}
