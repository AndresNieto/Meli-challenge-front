import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Busqueda from './components/Busqueda'
import ListaProductos from './components/ListaProductos'
import Producto from './components/Producto'
import ProductosState from './context/productosState';


function App() {
  return (
    <ProductosState>
      <Router>
        <Switch>
          <Route exact path="/" component={Busqueda} />
          <Route exact path="/items" component={ListaProductos} />
          <Route exact path="/items/:id" component={Producto} />
        </Switch>
      </Router>
    </ProductosState>
  );
}

export default App;
