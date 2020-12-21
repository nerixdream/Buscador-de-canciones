import * as UI from './interfaz.js'
import API from './api.js'


UI.formularioBuscar.addEventListener('submit', buscarCancion)

function buscarCancion(e) {
    e.preventDefault()
    const artista = document.querySelector('#artista').value
    const cancion = document.querySelector('#cancion').value

    if(artista === '' || cancion === ''){
        UI.divMensaje.textContent = 'Todos los campos son obligatorios'
        UI.divMensaje.classList.add('error')

        setTimeout(() => {
            UI.divMensaje.textContent = ''
            UI.divMensaje.classList.remove('error')
        }, 2000);

        return
    }

    //Consular Api
    const busqueda = new API(artista, cancion)
    busqueda.consultarApi()
}