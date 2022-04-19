let Shop = document.querySelector('.contenido_modal');
let popularesDetalles = document.querySelector('.contenido_modal');

const getLocalStorage = () => {
    const detalle = JSON.parse(localStorage.getItem('Detalle'));

    const { nombre, precio, porcentaje_descuento, imagen } = detalle;

    const formatoCOP = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })


        ofertasDetalles.innerHTML =
        `
        
        <div class="detalle-producto">
            <div class="cont-img-detalle">
                <img class="img-detalle" src="${imagen}">
            </div>
            <div class="cont-texto-detalle">
                <h1 class="Headline-1 text-detalle-producto">${nombre}</h1>
                <div class="precios-detalle-producto">
                    <h2 class="Headline-2 text-detalle-producto">${formatoCOP.format(precio - (precio * (porcentaje_descuento)))}/Kg</h2>
                    <p class="Body-1-Regular precio-sin-descuento" >${formatoCOP.format(precio)}/Kg</p>
                    <p class="Caption-Bold">${porcentaje_descuento * 100}% dto.</p>
                </div>
                <p class="Caption-Regular">Precio con IVA incluido</p>
                <p class="Body-1-Regular">Peso aproximado por pieza puede variar de acuerdo al precio real.</p>
                <div class="select-madurez">
                    <select class="madurez-producto">
                        <option value="none" selected disabled>Por elegir</option>
                        <option value="maduro">Maduro (Para hoy)</option>
                        <option value="normal">Normal (3-5 días)</option>
                        <option value="maduro">Verde (7 días)</option>
                    </select>
                    <div class="opciones-compra">
                        <div class="contenedor-seleccion-cantidad">
                            <button class="btnDisminuir btnDisminuirGramos">-</button>
                            <input type="number" value=500 id="inputGramos" readonly><p>g</p>
                            <button class="btnAumentar btnAumentarGramos">+</button>
                        </div>
                        <button type="button" class="btn" onclick="addProductos()" data-bs-dismiss="modal" aria-label="Close">Agregar</button>
                    </div>
            </div>
        `
    }


document.querySelector('#modalDetalles').addEventListener('show.bs.modal', () => {
    ofertasDetalles.innerHTML = '';
    popularesDetalles.innerHTML = '';
});

document.querySelector('#modalDetalles').addEventListener('shown.bs.modal', getLocalStorage)
