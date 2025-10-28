// console.log("daniel")
// let string1 = "hola, mundo"
// let string2 = "javaScript es genial"
// let string3 = `${string1} feliz :)`
// let string4 = string1 + string2

// console.log(string1)
// console.log(string2)
// console.log(string3)

// let frase = "JavaScript es Extremadamente Genial"
// console.log(frase-length)
// console.log(frase.toLowerCase())
// console.log(frase.toUpperCase())
// console.log(frase.substring(0, 10))

// const entero = 42
// const decimal = 3.14
// console.log(typeof entero, typeof decimal)

// // 2. Notacion cientifica 
// const cientifico = 5e3

// // 3. Infinitos y NaN
// const infinito = Infinity
// const noEsUnNumero = NaN

// // 4. operaciones arismeticas 

// //suma resta multiplicación división
// const suma = 10 + 5;
// const resta = 10 - 5;
// const multiplicacion = 10 * 5;
// const division = 10 / 5;
// const modulo = 10 % 3; //residuo de una división
// const exponenciacion = 2 ** 3; //2 elevado a la 3

// //operadores de incremento y decremento
// let incremento = 5;
// incremento++; //incremento en 1
// incremento--; //decremento en 1

// //precision de los números
// const resultado = 0.1 + 0.2; //puede no ser exacto
// console.log(resultado); //0.30000000000000004
// console.log(resultado.toFixed(2)); //redondea a 2 decimales
// console.log(resultado === 0.3); //false

// const string = "42"
// const integer = parseInt(string);
// console.log(integer);
// console.log(typeof integer);

// const stringDecimal = "123.456";
// const float = parseFloat(stringDecimal);
// console.log(float);
// console.log(typeof float);

// const binary = "1010";
// const decimal = parseInt(binary, 2);
// console.log(decimal);

//explicing type casting
const string = "123";
const integer = parseInt(string);
console.log(integer);
console.log(typeof integer);

const stringDecimal = "123.456";
const float = parseFloat(stringDecimal);
console.log(float);
console.log(typeof float);

const binary = "1010";
const decimal = parseInt(binary, 2);
console.log(decimal);
console.log(typeof decimal);


console.log(stringValue + stringValue); // "1010"
console.log(stringValue + numberValue); // "105"
console.log(stringValue + booleanValue); // "10true"
console.log(numberValue + booleanValue); // 6
console.log(numberValue + numberValue); // 10
console.log(numberValue + stringValue); // "510"
console.log(booleanValue + stringValue); // "true10"
console.log(booleanValue + numberValue); // 6
console.log(booleanValue + booleanValue); // 2
