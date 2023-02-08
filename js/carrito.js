const styleCarrito = ()  => {  
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";
    

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    
    modalHeader.append(modalButton);

    carrito.forEach((muebles)  => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${muebles.img}">
        <h3>${muebles.nombre}</h3>
        <p>${muebles.precio} $</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${muebles.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${muebles.cantidad * muebles.precio}</p>
        `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () => {
        if(muebles.cantidad !== 1){ 
        muebles.cantidad--;
        }
        styleCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            muebles.cantidad++;
            styleCarrito();
        });


        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad,  0);

    const comprasTotales = document.createElement("div")
    comprasTotales.className = "total-content";
    comprasTotales.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(comprasTotales);
}

verCarrito.addEventListener("click", styleCarrito);

const eliminarProducto = () => {
    const buscarProducto = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarProducto;
    });
    contadorCarrito();
    guardarLocales();
    styleCarrito();
};



const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";

    const carritoLenght = carrito.length;

    localStorage.setItem("carritoLenght", JSON.stringify(carritoLenght))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLenght")); 
};

contadorCarrito();
