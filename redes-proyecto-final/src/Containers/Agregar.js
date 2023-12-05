import React from 'react'
import { AgregarForm } from '../Components/AgregarForm'
import { Navbar } from '../Components/Navbar'

export const Agregar = () => {
  return (
    <section class="hero is-info is-fullheight">
      <div className="protectScreen">
        <Navbar />

        <div class="hero-body">
          <div class="container has-text-centered">
            <div className="columns">
              <div class="column is-6 is-offset-3">
                <h1 class="title">Agregar Nuevo Juego</h1>
                <h2 class="subtitle">
                  Completa los campos y encuentra tus juegos favoritos
                </h2>
                <div class="box">
                  <AgregarForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
