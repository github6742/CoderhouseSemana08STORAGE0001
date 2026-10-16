// Storage: almacenamiento del navegador. El objetivo es persistir la información (los datos)

// localStorage y sessionStorage: a fines de SINTAXIS, se trabajan iguales. Qué quiere decir? Que ambos comparten los métodos. Si sabemos guardar un valor en localStorage, hacemos lo mismo pero escribiendo sessionStorage

// setItem: este es el método que nos va a permitir guardar en el storage la información

// localStorage.setItem("nombre", "Lucas");
// localStorage.setItem("nombre", "Otro nombre");


// getItem: este es el método que nos va a permitir recuperar la información del storage

// const nombre = localStorage.getItem("nombre");

// console.log(nombre) // "Otro nombre"


// removeItem: nos permite eliminar un valor de localStorage

// localStorage.removeItem("nombre");


// clear: limpia TODO el localStorage

// localStorage.setItem("1", "a");
// localStorage.setItem("12", "2a");
// localStorage.setItem("13", "a3");
// localStorage.setItem("14", "5a");

// localStorage.clear();


// Si yo quiero hacer todo esto pero sessionStorage, cómo hago? Dije que la sintaxis es la misma

// sessionStorage.setItem

// Ejemplo

// localStorage.setItem("nombre", "Lucas");
// localStorage.setItem("apellido", "Ruiz");

// const nombre = localStorage.getItem("nombre");
// const apellido = localStorage.getItem("apellido");

// // alert(`Mi nombre es ${nombre} ${apellido}`);
// alert(nombre + " " + apellido);

// localStorage.setItem("edad", 17);

// const edadFinal = localStorage.getItem("edad") + 1;

// alert("Cuando cumpla años, voy a tener: " + (edadFinal));

// Todo lo que se guarda en storage, se guarda como un string

// const objeto = {
//     id: 1,
//     nombre: "nombre",
//     precio: 100
// };

// localStorage.setItem("objeto", objeto);

// JSON: JavaScript Object Notation. JSON tiene métodos que nos permiten transformar a un objeto en un string para guardar en localStorage. Ese método se llama stringify


// console.log(objeto);
// console.log(JSON.stringify(objeto));


// localStorage.setItem("objeto", JSON.stringify(objeto));


// const objetoDeStorage = localStorage.getItem("objeto");
// console.log(objetoDeStorage);
// console.log(objetoDeStorage.precio);


// El método que nos permite revertir el stringify y recuperar el objeto original es el parse

// const objetoDeStorage = JSON.parse(localStorage.getItem("objeto"));
// console.log(objetoDeStorage);
// console.log(objetoDeStorage.precio);


// Vamos a congelar comida

/*

-Para qué congelamos la comida? Para que dure más (persistencia de datos). Para comerla después.
-Cómo la guardo? En un recipiente, cualquiera. 
-Qué pasa si no la guardo en el recipiente? Se contamina, se quema, etc., por ende, después ya no me sirve. Eso mismo es hacer JSON.stringify.
-La guardo en el congelador. Esto es hacer setItem.
-Pasó un mes y quiero comer esta comida, qué hago? La saco del congelador para que se descongele. Esto es hacer getItem.
-La sacamos del recipiente para poder utilizarla. Esto es JSON.parse

*/


// Sugar syntax: nos permite escribir de manera simplificada algunas cosas. El ejemplo de i++ en el ciclo for nos indica que ya habíamos adoptado esta práctica sin saberlo

// Operador ternario

// const edad = 19;

// if (edad >= 18) {
//     alert("Sos mayor de edad, podés pasar al establecimiento bailable");
// } else {
//     alert("Volvé cuando cumplas 18");
// };

// Operador ternario: nos permite desarrollar un if-else en una única línea

// edad >= 18 ? alert("Sos mayor de edad") : alert("Volvé cuando cumplas 18");

// Valida por truthy y falsy: qué esto? Valores que aunque no sean true o false, se entienden como tal. Ejemplo: undefined, null no son false, pero los tomamos como false porque son falsys


// Operadores lógicos (AND y OR) (&& y ||)

// edad >= 18 && alert("Todo bien"); // AND devuelve el siguiente al último true
// edad >= 18 || alert("Todo bien"); // OR devuelve lo primero que te dé true


// Spread operator: nos permite "DESPARRAMAR" los valores.

// const array = [1,2,3];

// console.log("1 2 3");
// console.log(...array);

// const nuevoArray = [4,5,6, ...array];
// console.log(nuevoArray)

// const objeto = {
//     id: 1,
//     nombre: "A",
//     precio: 100,
// };

// const objetoEnOferta = {
//     ...objeto,
//     enOferta: true,
//     precio: 80,
// };

// console.log(objetoEnOferta);

// Ejemplo: tengo un producto (objeto) en mi array carrito. Si quiero modificarlo (agregar una unidad nueva), puedo usar ese mismo objeto, hacer spread para mantener TODO lo que tiene y solo le modifico unidades.

// Rest parameters: nos permite recibir parámetros. Los que quiera. Cualquier cantidad. Los agrupa en un array

// function suma(...numeros){
//     console.log(numeros.reduce((acc, numero) => acc + numero ,0));
// };

// suma(12, 12);

// Desestructuración o destructuring: si yo quiero acceder a cada valor de este objeto, puedo hacerlo mediante dot notation o bien, puedo hacer destructuring de sus valores

// const objeto = {
//     id: 1,
//     nombre: "A",
//     precio: 100,
// };

// const id = objeto.id;
// const nombre = objeto.nombre;
// const precio = objeto.precio;

// const { nombre, precio, id } = objeto; // Acá importa el nombre sin importar el orden

// console.log(id);
// console.log(nombre);
// console.log(precio);

// const array = ["Lucas", "Juan", "Pedro"];

// // const primerElemento = array[0];
// // const segundoElemento = array[1];
// // const tercerElemento = array[2];

// const [primerElemento, segundoElemento, tercerElemento] = array; // Acá no importa el nombre, importa el orden.

// console.log(primerElemento);
// console.log(segundoElemento);
// console.log(tercerElemento);


// ------------------------------------------------
// Aplicamos todo lo visto a lo que hicimos la clase pasada

// Aplicamos todo lo visto desde la clase 1 a hoy. Incorporamos DOM y Eventos

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productos = [
    {
        id: 1,
        nombre: "Producto A",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto B",
        precio: 80
    },
    {
        id: 3,
        nombre: "Producto C",
        precio: 110
    },
];

function agregarAlCarrito(producto){
    // if que valide si se trata de un producto que ya existe en el carrito
    
    carrito.push({...producto, cantidad: 1});
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Agregaste correctamente: " + producto.nombre);
};

const container = document.getElementById("container");
function crearCard(elemento) {
    const card = document.createElement("div");
    card.className = "card";

    const titulo = document.createElement("h3");
    titulo.innerText = elemento.nombre

    const precio = document.createElement("p");
    precio.innerText = `$${elemento.precio}`

    const boton = document.createElement("button");
    boton.className = "btn";
    boton.innerText = "Comprar";
    boton.addEventListener("click", () => agregarAlCarrito(elemento));

    card.appendChild(titulo);
    card.appendChild(precio);
    card.appendChild(boton);

    container.appendChild(card);
}


productos.forEach(producto => crearCard(producto));

const verCarrito = document.getElementById("verCarrito");
verCarrito.onclick = () => console.log(carrito);

// productos.forEach(producto => {
//     const card = document.createElement("div");
//     card.className = "card";

//     const titulo = document.createElement("h3");
//     titulo.innerText = producto.nombre

//     const precio = document.createElement("p");
//     precio.innerText = `$${producto.precio}`

//     const boton = document.createElement("button");
//     boton.innerText = "Comprar";
//     boton.addEventListener("click", () => alert("Vas a clickear el producto: " + producto.nombre));

//     card.appendChild(titulo);
//     card.appendChild(precio);
//     card.appendChild(boton);

//     container.appendChild(card);
// });

// Qué debería hacer para que este ejemplo esté completo?

/*

-CSS
-Funciones como agregar al carrito
-Lógica de carrito, array, etc.
-Array de productos un poco más desarrollado

*/