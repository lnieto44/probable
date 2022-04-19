

const formulario = document.getElementById('form-registrarse')
// const btnCrearUsuario = document.getElementById('btncrear')

window.addEventListener('DOMContentLoaded', ()=>{
 
})

formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    let foto = document.getElementById('formFile').value
    let nombre = document.getElementById('name').value
    let email = document.getElementById('email').value
    let descripcion = document.getElementById('description').value

    let resp = await fetch ('https://app-tiend.herokuapp.com/users', {
        method: 'POST',
        body: JSON.stringify({
            url: foto,
            name : nombre,
            email: email,
            description:descripcion
        }),
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    })
    let data = resp.json()
    console.log(data)
})