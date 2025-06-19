// ELIMINAR ALGO DE UN OBJ

const containerButton = document.createElement('div')
containerButton.classList.add('secondDiv')

const newBotton = document.createElement('button')
newBotton.id = 'newButton'
newBotton.innerHTML = 'Click acá'

containerButton.innerHTML = ''
containerButton.appendChild(newBotton)

document.querySelector('body').appendChild(containerButton)

newBotton.addEventListener('click', createObj)
document.querySelector('#boton-xd').remove()

async function createObj() {
    const obj = {
        nombre: "Televisor de 80 pulgadas",
        precio: 300,
        disponible: true
    }
    console.log("Obj antes", obj)
    const objModified = await modifiedObj(obj) 
    console.log("Obj despues", objModified)
}

async function modifiedObj(obj){
    obj.imagen = 'imagen.jpeg'
    delete obj.disponible
    return obj
}