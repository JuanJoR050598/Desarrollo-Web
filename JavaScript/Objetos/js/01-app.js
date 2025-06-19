document.querySelector('#boton-xd').addEventListener('click', async () => {
    console.log("creacion de objeto en proceso")
    await creacionObjeto()
})

async function creacionObjeto() {
    const obj = {
        nombre: "Televisor de 80 pulgadas",
        precio: 300,
        disponible: true
    }

    console.log("Objecto creado", obj)
}