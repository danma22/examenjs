
// Lista de todos los productos mostrados en lista
const menu = [
    {
      id: 1,
      title: "Tenis Nike 1",
      category: "tenis",
      price: 1000.00,
      img: 'imgs/tenis1.jpg',
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis deserunt expedita aspernatur doloremque.`,
    },
    {
      id: 2,
      title: "Tenis Adidas 2",
      category: "tenis",
      price: 1520.00,
      img: 'imgs/tenis2.jpg',
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis deserunt expedita aspernatur doloremque.`,
    },
    {
      id: 3,
      title: "Botas 1",
      category: "botas",
      price: 1400.00,
      img: 'imgs/botas1.jpg',
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis deserunt expedita aspernatur doloremque.`,
    },
    {
      id: 4,
      title: "Zapatos 2",
      category: "zapatos",
      price: 1999.00,
      img: 'imgs/zapatos1.jpg',
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis deserunt expedita aspernatur doloremque.`,
    },
    {
      id: 5,
      title: "Zapatos chidos 3",
      category: "zapatos",
      price: 1400.00,
      img: 'imgs/zapatos2.jpg',
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis deserunt expedita aspernatur doloremque.`,
    },
    {
      id: 6,
      title: "Botas 4",
      category: "botas",
      price: 780.10,
      img: 'imgs/botas2.jpg',
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis deserunt expedita aspernatur doloremque.`,
    },
    {
      id: 7,
      title: "Sandalias 5",
      category: "sandalias",
      price: 4000,
      img: 'imgs/sandalias1.jpg',
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis deserunt expedita aspernatur doloremque.`,
    },
    {
      id: 8,
      title: "Tenis 3",
      category: "tenis",
      price: 1100.00,
      img: 'imgs/tenis3.jpg',
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis deserunt expedita aspernatur doloremque.`,
    },
    {
      id: 9,
      title: "Sandalias kool 9",
      category: "sandalias",
      price: 450.00,
      img: 'imgs/sandalias2.jpg',
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis deserunt expedita aspernatur doloremque.`,
    },
    {
      id: 10,
      title: "Botas mattel",
      category: "botas",
      price: 809.00,
      img: 'imgs/botas3.jpg',
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit culpa tempora architecto perspiciatis nobis deserunt expedita aspernatur doloremque.`,
    }
]

// Cuando se carga el contenido de la página se manda a llamar funciones para dibujar los botones y los productos dela lista
document.addEventListener('DOMContentLoaded', function(){
    mostrar_botones();
    desplegarLista(menu);
});

// Función para desplegar todos los elementos del a lista
function desplegarLista(menuItems){
    let content = ''
    let containerCards = document.getElementById('cards')
    // Se va recolectando la formación de cartas para mostrar los productos
    menuItems.forEach((e) => {
        content += `<div class="card" style="margin-bottom: 15px;padding: 10px">
            <h3 class="card-title"> ${e.category} </h2>
            <h2 class="card-title"> ${e.title} </h2>
            <p>${e.desc}</p>
            <img src="${e.img}" class="card-img img-fluid rounded-start" alt="">
            <span>$${e.price}</span>
        </div>`
    });

    // En el contenedor se colocan todas las tarjetas de productos qeu se crearon
    containerCards.innerHTML = content
}

// Función para dibujar todos los obtones que podrán servir para filtrar todo
function mostrar_botones() {
    let content = `<label class="btn bg-primary active"> 
      <input type="radio" class="btns" name="options" id="todo" autocomplete="off" checked> Todo
    </label>`;
    let btnsContainer = document.getElementById('btnsCategoria')
    let allcategories = new Array()

    menu.forEach((e) => {
        allcategories.push(e.category);
    });

    // Se filtran las categorias existentes para evitar repetir categorias y tener una lista con valores únicos
    let categories = allcategories.filter((e, i)=>{
        return allcategories.indexOf(e) === i;
    });

    // A partir de las categorías que tienen los datos, se crean distintos botones para cada categoria sin que se repitan
    categories.forEach((e) => {
        content += `<label class="btn bg-primary">
            <input type="radio" class="btns" name="options" id="${e}" autocomplete="off"> ${e}
        </label>`;
    });

    btnsContainer.innerHTML = content
    let btns = btnsContainer.querySelectorAll('.btns'); // Array de botones de categoria

    // Se le da a cada boton la posibilidad de filtrar el menu con su id
    btns.forEach((btn) => {
        btn.addEventListener("click", function (e){
            let category = btn.id;

            let menuCategory = menu.filter(function (item) {
                if (item.category === category) {
                    return item;
                }
            });

            if (category == "todo") {
                desplegarLista(menu);
            } else {
                desplegarLista(menuCategory);
            }
        });
    });
}

