import React, { useState } from 'react'
import {  bd } from '../App/bd'
import Swal from 'sweetalert2'
import { useLocalStorage } from '../Hook/useLocalStorage'

export const Form = ({ setJuegos }) => {
  const [storedValue, setlocalStorage] = useLocalStorage('nombre', '')

  const [datos, setDatos] = useState({
    categoria: '',
    multijugador: '',
    edad: '',
    plataforma: '',
  })

  const handleData = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  const filtrarJuegos = (juegos, filtros) => {
    return juegos.filter(juego => {
        for (const atributo in filtros) {
            if (filtros.hasOwnProperty(atributo) && filtros[atributo] !== "") {
                if (juego[atributo] !== filtros[atributo]) {
                    return false;
                }
            }
        }
        return true;
    });
}

  const fetch = async e => {
    e.preventDefault()
    // let data = await api.juegos.search(datos)
    const res = filtrarJuegos(bd, datos)
    console.log(datos)
    console.log(res)
    setJuegos(res)
    Swal.fire({
      title: `${storedValue}, creemos que estos juegos te encantaran`,
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

      

    // if (res) {
    //   setJuegos(data.body)
    //   Swal.fire({
    //     title: `${storedValue}, creemos que estos juegos te encantaran`,
    //     width: 600,
    //     icon: 'success',
    //     padding: '3em',
    //     background: '#fff url(/images/trees.png)',
    //     backdrop: `
    //             rgba(0,0,123,0.4)
    //             url("/images/nyan-cat.gif")
    //             left top
    //             no-repeat
    //           `,
    //   })
    // }else{
    //   Swal.fire({
    //     title: `Tenemos algunos problemas para recomendarte juegos`,
    //     width: 600,
    //     icon: 'error',
    //     padding: '3em',
    //     background: '#fff url(/images/trees.png)',
    //     backdrop: `
    //             rgba(0,0,123,0.4)
    //             url("/images/nyan-cat.gif")
    //             left top
    //             no-repeat
    //           `,
    //   })
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
              <select name="multijugador" onChange={handleData}>
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
              <select name="edad" onChange={handleData}>
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
              <select name="plataforma" onChange={handleData}>
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

      <div class="field is-grouped">
        <button class="button is-block is-fullwidth is-link">Buscar</button>
      </div>
    </form>
  )
}
