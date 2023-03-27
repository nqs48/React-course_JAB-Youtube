import { reyes } from './database/dataReyes.js'

var initialName = '...'
var finalName = 'Nestea'

/**
 * Referencia del contenedor por medio del ID
 */
var containerMain = document.querySelector('#container')

/**
 *  Creacion de elementos hr - h2
 */
var separador = document.createElement('hr')
var banner = document.createElement('h2')

/**
 * Asignacion de texto al banner h2
 */
banner.textContent = `Hello I'm ${initialName}`

/**
 * Creacion de boton para interaccion
 */
var button = document.createElement('button')

/**
 * Asignacion de texto al boton
 */
button.textContent = 'Change Name'

/**
 * Asignacion de evento tipo click que cambia el contenido del banner
 */
button.addEventListener('click', () => {
  if (banner.textContent.includes(finalName)) {
    banner.textContent = `Hello I'm ${initialName}`
  } else {
    banner.textContent = `Hello I'm ${finalName}`
  }
})

/**
 * Asignacion de elementos al contenedor principal
 */
containerMain.append(banner, button, separador)

/**
 * Creacion de un sub contenedor
 */
var kingsContainer = document.createElement('div')

/**
 * Creacion de boton traer dartos y asignacion del texto
 */
var buttonKing = document.createElement('button')
buttonKing.textContent = 'Traer Reyes'

/**
 * Asigancion de evento click para tarer los datos
 */
buttonKing.addEventListener('click', () => {
  if (kingsContainer.childElementCount > 2) {
    alert('Ya estan los reyes en la mesa')
    return
  }
  reyes.map((rey) => {
    var text = document.createElement('p')
    text.innerHTML = `${rey.nombre} come ${rey.vacasComidas} al dia.`
    kingsContainer.append(text)
  })
})

/**
 * Creacion de boton traer dartos y asignacion del texto
 */
var filterKing = document.createElement('button')
filterKing.textContent = 'Filtar Reyes'

/**
 * Asignacion de evento click para filtar los datos por  vacasComidas
 */
filterKing.addEventListener('click', () => {
  reyes
    .filter((rey) => rey.vacasComidas > 10)
    .map((rey) => {
      var text = document.createElement('p')
      text.innerHTML = `Tratamiento: ${rey.nombre}:${rey.vacasComidas} vacas.`
      kingsContainer.append(text)
    })
})

/**
 * Asignacion de elementos al subcontainer
 */
kingsContainer.append(buttonKing, filterKing)

/**
 * Asignacion de elementos al contenedor principal
 */
containerMain.append(kingsContainer)

console.log("Hello I'm Nestea")
console.log(reyes)
