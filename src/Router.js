import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Personajes from './components/Personajes'
import Episodios from './components/Episodios'
import Registro from './components/Registro'

export default function Router() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/characters" component={Personajes}/>
      <Route exact path="/episodes" component={Episodios}/>
      <Route exact path="/login" component={Registro}/>
    </Switch>
    </BrowserRouter>
  )
}