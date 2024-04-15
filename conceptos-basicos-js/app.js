// Imprime "Hola, mundo!" en la consola.
console.log("Hola, mundo!");

// Crea una variable para almacenar tu nombre y luego imprímela en la consola.
let nombre = "Máximo";

console.log(nombre);

// Crea una variable para almacenar tu edad y luego imprímela en la consola.
let edad = 19;

console.log(edad);

// Calcula la suma de dos números y muestra el resultado.
let numero1 = 9;
let numero2 = 12;
let suma = numero1 + numero2;

console.log(suma);

// Crea una función que tome dos parámetros y devuelva su suma.
let num1 = 4;
let num2 = 6;

function sumar (a, b) {
  return resultado = a + b;
}

console.log(sumar(num1, num2));

// Crea una función que tome dos parámetros y devuelva el mayor de los dos.
let n1 = 23;
let n2 = 6;

function mayor (a, b) {
  if (a > b) {
    return a;
  } 
  if (a < b) {
    return b;
  }
  else {
    return "Los dos números son iguales."
  }
}

console.log(mayor(n1, n2));

// Crea una función que tome tres parámetros y devuelva el mayor de los tres.
let nro1 = 60;
let nro2 = 81;
let nro3 = 100;

function comparar(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(comparar(nro1, nro2, nro3));

// Crea una función que tome un número como parámetro y devuelva true si es par, y false si es impar.
let n = 2;

function bool (a) {
  if (a % 2 == 0){
    return true;
  } else {
    return false;
  }
}

console.log(bool(n));

// Crea una función que tome una cadena como parámetro y devuelva la longitud de esa cadena.
let cadena = "Hola a todos!";

function longitud (c) {
  return c.length;
}

console.log(longitud(cadena));

// Crea una función que tome una cadena como parámetro y devuelva esa cadena al revés.
let string = "All night long";

function cadenaAlReves () {
  return string.split('').reverse().join('');
}

console.log(cadenaAlReves());

// split(''): Divide la cadena en un arreglo de caracteres. Por ejemplo, "Hola Mundo".split('') resulta en ["H", "o", "l", "a", " ", "M", "u", "n", "d", "o"].
// reverse(): Invierte el orden de los elementos en un arreglo. Así que después de aplicar reverse(), el arreglo anterior se convierte en ["o", "d", "n", "u", "M", " ", "a", "l", "o", "H"].
// join(''): Une los elementos de un arreglo en una cadena. Los elementos se unen sin ningún separador, dado que se proporciona una cadena vacía como argumento a join('').