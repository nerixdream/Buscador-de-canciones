import * as UI from './interfaz.js'

class API {
    constructor(artista, cancion){
        this.artista = artista
        this.cancion = cancion
    }

    consultarApi(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => {
                console.log(datos);
                const {lyrics} = datos

                if(datos.lyrics){
                    UI.divResultado.textContent = lyrics
                }else{
                    UI.divMensaje.textContent = 'No se encontro la canción'
                    UI.divMensaje.classList.add('error')

                    setTimeout(() => {
                        UI.divMensaje.textContent = ''
                        UI.divMensaje.classList.remove('error')
                    }, 2000);
                }
            })
    }
}

export default API