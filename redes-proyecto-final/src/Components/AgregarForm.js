import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useLocalStorage } from '../Hook/useLocalStorage'

export const AgregarForm = () => {
  const [storedValue, setlocalStorage] = useLocalStorage('nombre', '')
  const [juegos, setJuegos] = useState()

  const [datos, setDatos] = useState({
    categoria: '',
    multijugador: '',
    edad: '',
    plataforma: '',
    url: '',
  })

  const handleData = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  const fetch = async e => {
    e.preventDefault()

    if (
      datos.categoria != '' &&
      datos.multijugador != '' &&
      datos.edad != '' &&
      datos.plataforma != '' &&
      datos.url != ''
    ) {
      Swal.fire({
        title: `${storedValue}, tu juego Guardado Correctamente, los cambios puden tardar un momento en aplicarse`,
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
        title: 'Complete todos los datos',
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

    // let data = await api.juegos.search(datos)

    // if (data.body != '') {
    //   setJuegos(data.body)
    // }
  }

  return (
    <form onSubmit={fetch}>
      <div className="columns">
        <div className="column is-6">
          <label class="label">Categoria</label>
          <div class="control">
            <div class="select">
              <select
                required
                name="categoria"
                onChange={handleData}
                className=" input is-fullwidht">
                <option value="-" selected disabled>
                  --------------
                </option>
                <option value="Accion">Acción</option>
                <option value="Aventura">Aventura</option>
              </select>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <label class="label">Multijugador</label>
          <div class="control">
            <div class="select">
              <select name="multijugador" required onChange={handleData}>
                <option value="-" selected disabled>
                  --------------
                </option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-6">
          <label class="label">Es mayor de edad</label>
          <div class="control">
            <div class="select">
              <select name="edad" required onChange={handleData}>
                <option value="-" selected disabled>
                  --------------
                </option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <label class="label">Plataforma</label>
          <div class="control">
            <div class="select">
              <select name="plataforma" required onChange={handleData}>
                <option value="-" selected disabled>
                  --------------
                </option>
                <option value="PC">PC</option>
                <option value="PlayStation">PlayStation</option>
                <option value="Xbox">Xbox</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="column is-12">
        <label class="label">Imagen (URL)</label>
        <div class="control">
          <input
            type="text"
            name="url"
            value={datos.url}
            onChange={handleData}
            className="input"
          />
        </div>
      </div>
      <div class="field is-grouped">
        <button class="button is-block is-fullwidth is-link">Agregar</button>
      </div>
    </form>
  )
}
