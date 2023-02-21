//creando una alerta
showAlert.style.display = "none";

const createALalert = () => {
    showAlert.innerHTML = "";
    let contentAlert = document.createElement("span");

    contentAlert.innerHTML = `
<span><strong>Yay!</strong> 🎉 su producto ha sido agregado a su carrito.</span>
`;

    showAlert.append(contentAlert);

    showAlert.style.display = "block";

    function cleanAlert() {
        showAlert.style.display = "none";
    }

    setTimeout(cleanAlert, 2000);
};