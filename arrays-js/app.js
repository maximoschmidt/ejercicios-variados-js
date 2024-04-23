// Crea un array con 5 nombres y luego imprímelo en la consola.
let array = ["Pedro", "Felipe", "Fabiana", "Lorena", "Marcelo"];

console.log(array);

// Agrega un nuevo nombre al array anterior y muestra el array actualizado.
array.push("Feliciano"); // Agrega un nuevo nombre al final del array.
array.unshift("Victoria"); // Agrega un nuevo nombre al inicio del array.
console.log(array);

// Elimina el último nombre del array y muestra el array actualizado.
array.pop();
console.log(array);

// Crea una función que tome un array como parámetro y devuelva la longitud de ese array.
let arreglo = [1, 5, 9, 29, 18, 12];

function longitud (array) {
  return array.length;
}

console.log(longitud(arreglo));

// Crea una función que tome un array de números como parámetro y devuelva la suma de esos números.
let arrayNumeros = [1, 3, 6, 9];

function suma(array) {
	let sumar = 0;
		for (let i = 0; i < array.length; i++) {
			sumar += array[i];
		}
	return sumar;
}

console.log(suma(arrayNumeros));

// Crea una función que tome un array de números como parámetro y devuelva el número más grande.
let arregloNumeros = [9, 12, 18];

function mayor(array) {
	let grande = array[0];
		for (let i = 1; i < array.length; i++) {
			if (array[i] > grande) {
				grande = array[i];
			}
		}
	return grande;
}

console.log(mayor(arregloNumeros)); 

// Crea una función que tome un array de números como parámetro y devuelva el número más pequeño.
let array1 = [9, 12, 18];

function menor(array) {
	let chico = array[0];
		for (let i = 1; i < array.length; i++) {
			if (array[i] < chico) {
				chico = array[i];
			}
		}
	return chico;
}

console.log(menor(array1)); 

// Crea una función que tome un array como parámetro y devuelva ese array al revés.
// Crea una función que tome dos arrays como parámetros y devuelva un nuevo array que contenga todos los elementos de ambos arrays.
// Crea una función que tome un array de números como parámetro y devuelva un nuevo array con solo los números pares.

