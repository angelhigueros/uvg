import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from '../Containers/Home'
import { Recomendaciones } from '../Containers/Recomendaciones'
import { Agregar } from '../Containers/Agregar'
import { Eliminar } from '../Containers/Eliminar'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recomendaciones" component={Recomendaciones} />
        <Route exact path="/agregar" component={Agregar} />
        <Route exact path="/eliminar" component={Eliminar} />
      </Switch>
    </BrowserRouter>
  )
}
