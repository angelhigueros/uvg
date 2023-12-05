import React from 'react'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../Hook/useLocalStorage'

export const Navbar = () => {
  const [storedValue, setlocalStorage] = useLocalStorage('nombre', '')


  return (
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <span className="title is-2 mt-2">Proyecto 2 - {storedValue}</span>
            <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <span class="navbar-item">
                <Link
                  class="button is-white is-outlined"
                  to="/">
                  <span>Home</span>
                </Link>
              </span>
              <span class="navbar-item">
                <Link
                  class="button is-white is-outlined"
                  to="/recomendaciones">
                  <span>Recomendaciones</span>
                </Link>
              </span>
              {/* <span class="navbar-item">
                <Link
                  class="button is-white is-outlined"
                  to="/agregar">
                  <span>Agregar Juego</span>
                </Link>
              </span>
              <span class="navbar-item">
                <Link
                  class="button is-white is-outlined"
                  to="eliminar">
                  <span>Eliminar Juego</span>
                </Link>
              </span> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
