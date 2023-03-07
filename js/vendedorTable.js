'use strict'

// Datos para la tabla
const data = [
    {
        id: 1,
        user: 'dan',
        nombre: "Daniel",
        nombreProducto: "Tenis Nike 1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis.",
        price: 1000.00,
        fecha: '12-02-2023'
    },
    {
        id: 2,
        user: 'jon',
        nombre: "Jonathan",
        nombreProducto: "Tenis Nike 2",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis.",
        price: 1982.00,
        fecha: '24-02-2023'
    },
    {
        id: 3,
        user: 'nubis',
        nombre: "Nubia",
        nombreProducto: "Botas 2",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis.",
        price: 2356.00,
        fecha: '24-06-2022'
    },
    {
        id: 4,
        user: 'jose',
        nombre: "Jose Rodolfo",
        nombreProducto: "Sandalias 2",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis.",
        price: 700.00,
        fecha: '02-06-2022'
    },
    {
        id: 5,
        user: 'torres',
        nombre: "Jorge",
        nombreProducto: "Sandalias 1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis.",
        price: 1200.00,
        fecha: '15-06-2022'
    },
    {
        id: 6,
        user: 'cumpean',
        nombre: "Jose",
        nombreProducto: "Zapatos 1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis.",
        price: 2400.00,
        fecha: '17-03-2020'
    },
    {
        id: 7,
        user: 'cheeza',
        nombre: "Cesar",
        nombreProducto: "Zapatos 2",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis.",
        price: 1780.00,
        fecha: '21-11-2023'
    },
    {
        id: 8,
        user: 'pais',
        nombre: "Osiel",
        nombreProducto: "Tenis 3",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis.",
        price: 2500.00,
        fecha: '28-02-2017'
    },
    {
        id: 8,
        user: 'lilsa',
        nombre: "Lilian",
        nombreProducto: "Botas 3",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis.",
        price: 3200.00,
        fecha: '28-02-2023'
    },
    {
        id: 8,
        user: 'jorch',
        nombre: "Jorge Guevara",
        nombreProducto: "Tenis Nike 1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis.",
        price: 1400.00,
        fecha: '29-04-2023'
    },
  ];


// Función para llenar la tabla 
function fillTable(){
    let table = document.getElementById("contentTable")
    // Contenido de la tabla con toda la información
    let contentTable = data.map(function (p) {
        return `<tr>
          <td>${p.user}</td>
          <td>${p.nombre}</td>
          <td>${p.nombreProducto}</td>
          <td>${p.desc}</td>
          <td>${p.price}</td>
          <td>${p.fecha}</td>
        </tr>`
    });
    // Se une todo el contenido del array
    contentTable = contentTable.join("");

    table.innerHTML = contentTable
}

// Cuando se cargue la página se llena la tabla
document.addEventListener("DOMContentLoaded", function() {
  fillTable()
});
