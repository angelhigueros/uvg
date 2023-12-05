import React from 'react'
import { EliminarForm } from '../Components/EliminarForm'
import { Navbar } from '../Components/Navbar'

export const Eliminar = () => {
  return (
    <section class="hero is-info is-fullheight">
      <div className="protectScreen">
        <Navbar />

        <div class="hero-body">
          <div class="container has-text-centered">
            <div className="columns">
              <div class="column is-6 is-offset-3">
                <h1 class="title">Eliminar Juego</h1>
                <h2 class="subtitle">
                  Ingresa el nombre del juego para elimarlo del catalogo
                </h2>
                <div class="box">
                  <EliminarForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
