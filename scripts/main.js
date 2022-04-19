import { getData } from "./getData.js";
import { showData } from "./showData.js";

const endpoint = 'https://app-tiend.herokuapp.com/products'

let shop = document.querySelector('#shop');
let populares = document.querySelector('#set-content');

document.addEventListener('DOMContentLoaded', () => {
    const data = getData(endpoint);
    showData(data, shop, populares);
})

shop.addEventListener('click', async event => {
    const btnDetalle = event.target.classList.contains('btnDetalle')
    const id = event.target.id

    if (btnDetalle) {
        const lista = await getData(endpoint);
        const objeto = lista.find(list => list.id === Number(id));

        localStorage.setItem('Detalle', JSON.stringify(objeto));

    }
});

populares.addEventListener('click', async event => {
    const btnDetalle = event.target.classList.contains('btnDetalle')
    const id = event.target.id

    if (btnDetalle) {
        const lista = await getData(endpoint);
        const objeto = lista.find(list => list.id === Number(id));

        localStorage.setItem('Detalle', JSON.stringify(objeto));
    }
});


let formUbicacion = document.getElementById('formUbicacion');

formUbicacion.addEventListener('submit', (e) => {
    e.preventDefault()
    let selectUbicacion = document.getElementById('selectUbicacion').value;
    document.getElementById('textUbicacion').textContent = selectUbicacion;
    document.getElementById('textUbicacionCarrito').textContent = selectUbicacion;
    console.log(selectUbicacion);

})





