import React from 'react'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../Hook/useLocalStorage'
import { Navbar } from '../Components/Navbar'

export const Home = () => {
  const [storedValue, setlocalStorage] = useLocalStorage('nombre', '')

  const hanldeChange = e => {
    setlocalStorage(e.target.value)
  }

  return (
    <section class="hero is-info is-fullheight">
      <div className="protectScreen">
        <Navbar />

        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-6 is-offset-3">
              <h1 class="title">Recomendación de Juegos</h1>
              
              <a
                style={{fontSize: '30px', fontWeight: 'bolder'}}
                target='_blank'
                href="https://sites.google.com/uvg.edu.gt/intranet/biograf%C3%ADa" rel="noreferrer">IR A UVG BLOG -> sites.google.com/uvg.edu.gt</a>

              <h2 class="subtitle">
                Esta es la mejor plataforma online de recomendación de
                videojuegos. Unicamente con unos pocos datos te diremos tus
                proximos juegos favoritos utilizando tecnologia de grafos,
                algoritmos de ordenamiento y busqueda.
              </h2>
              <div class="box">
                <div class="field is-grouped">
                  <p class="control">
                    <input
                      style={{ width: '400px' }}
                      type="text"
                      onChange={hanldeChange}
                      value={storedValue}
                      className="input is-fullwidth"
                      placeholder="Ingresa tu apodo"
                    />
                  </p>
                  <Link to="/recomendaciones" class="button is-info">
                    Ingresar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
