import React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useLocalStorage } from '../Hook/useLocalStorage'


export const EliminarForm = () => {
  const [juegos, setJuegos] = useState()
  const [storedValue, setlocalStorage] = useLocalStorage('nombre', '')

  const [datos, setDatos] = useState({
    nombre: 'COD',
  })

  const handleData = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  const fetch = async e => {
    e.preventDefault()

    if (datos.nombre == 'COD') {
      Swal.fire({
        title: `${storedValue}, el juego ha sido elimnado del catálogo, los cambios puden tardar un momento en aplicarse`,
        width: 600,
        icon: 'success',
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `,
      })
    } else {
      Swal.fire({
        title: 'Codigo no valido',
        width: 600,
        icon: 'error',
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `,
      })
    }
  }

  return (
    <form onSubmit={fetch}>
      <div className="column is-12">
        <label class="label">Ingresa el codigo del Juego</label>
        <div class="control">
          <input
            type="text"
            name="nombre"
            value={datos.nombre}
            onChange={handleData}
            className="input"
          />
        </div>
      </div>
      <div class="field is-grouped">
        <button class="button is-block is-fullwidth is-danger">Eliminar</button>
      </div>
    </form>
  )
}
