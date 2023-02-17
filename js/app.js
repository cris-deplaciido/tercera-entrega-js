


const shopContent = document.getElementById("shopContent");
const verCarrito  = document.getElementById("verCarrito"); 
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("objetos")) || [];

const getProducts = async ()  => {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);
};

getProducts();

productos.forEach((muebles) => {
    let contenido = document.createElement("div");
    contenido.className = "card "
    contenido.innerHTML = `
    <img src="${muebles.img}">
    <h3>${muebles.nombre}</h3>
    <p class="precio"> $ ${muebles.precio} </p>
    `;

    shopContent.append(contenido); 

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    contenido.append(comprar);

    comprar.addEventListener("click", () => {

    const repetido = carrito.some((productoRepetido) => productoRepetido.id === muebles.id);

    if (repetido) {
        carrito.map((prod) => {
        if(prod.id === muebles.id){
            prod.cantidad++;
        }
    });
    } else{ 
    carrito.push({
        id: muebles.id,
        img: muebles.img,
        nombre: muebles.nombre,
        precio: muebles.precio,
        cantidad: muebles.cantidad,
    });
    }
    console.log(carrito);
    contadorCarrito();
    guardarLocales();
    });
}); 

const guardarLocales = () => {
    localStorage.setItem("objetos", JSON.stringify (carrito));
};


