import React, { Fragment, useContext } from "react";
import { withRouter } from "react-router-dom";

import logo from "./../assets/Logo_ML.png";
import iconSearch from "./../assets/ic_Search.png";
import productosContext from "./../context/productosContext";

const Busqueda = (props) => {

  //Obtener state de context
  const productoContext = useContext(productosContext);
  const {
    guardarConsulta,
    consulta,
  } = productoContext;

  // Se eencarga de guardar la consulta
  const onChangeSearch = (e) => {
    guardarConsulta(e.target.value);
  };

  // Encargado de redirigir hacia /items
  const onSearch = async e => {
    e.preventDefault();

    if (consulta.trim() === "") return;

    props.history.push({
      pathname: '/items',
      search: `?search=${consulta}`
    })
  };

  return (
    <Fragment>
      <nav className="uk-navbar-container  uk-margin  ">
        <div className="uk-navbar-center navBar">
          <div className="uk-navbar-item divSearchBar">
            <a className="uk-navbar-item uk-logo .nav-logo" href="/">
              <img
               src={logo} 
               alt="Mercado Libre" />
            </a>
            <form onSubmit={onSearch}>
              <input
                name="consulta"
                className="uk-input uk-form-width-large inputSearch"
                type="text"
                placeholder="Nunca dejes de buscar"
                value={consulta}
                onChange={onChangeSearch}
              />
              <button type="submit" className="btnSearch">
                <span className="uk-icon uk-margin-small-right">
                  <img
                   src={iconSearch}
                  alt="Search button" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default withRouter(Busqueda);
