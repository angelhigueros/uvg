import React, { useState } from 'react'
import { Form } from '../Components/Form'
import { List } from '../Components/List'
import { Navbar } from '../Components/Navbar'

export const Recomendaciones = () => {
  const [juegos, setJuegos] = useState([])

  return (
    <section class="hero is-info is-fullheight">
      <div className="protectScreen">
        <Navbar />

        <div class="hero-body">
          <div class="container has-text-centered">
            <div className="columns">
              <div class="column is-5">
                <h1 class="title">Filtrar juegos</h1>
                <h2 class="subtitle">
                  Completa los campos y encuentra tus juegos favoritos
                </h2>
                <div class="box">
                  <Form setJuegos={setJuegos} />
                </div>
              </div>

              <div class="column is-5 is-offset-1">
                <h1 class="title">Recomendadción de Juegos</h1>
                <h2 class="subtitle">
                  Tus proximos juegos favoritos utilizando tecnologia de grafos,
                  algoritmos de ordenamiento y busqueda.
                </h2>
                <div class="box">
                  <List juegos={juegos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
