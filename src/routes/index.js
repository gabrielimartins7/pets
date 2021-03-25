import React from 'react'
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import MaisDetalhes from '../pages/MaisDetalhes'
import { Cadastro } from '../pages/Cadastro';

import LayoutPrincipal from '../@layouts/principal'

import Route from './Router'

export default function Routes() {
  return (
   <Switch>
      <Route path="/" exact Component={Home} Layout={LayoutPrincipal}  />
      <Route path="/login" exact Component={Login} Layout={LayoutPrincipal} />
      <Route path="/cadastro" exact Component={Cadastro} Layout={LayoutPrincipal} />
      <Route path="/mais-detalhes/:id" exact Component={MaisDetalhes} Layout={LayoutPrincipal} />
    </Switch>
  )
}
