import React, { Fragment, useContext, useEffect } from "react";
import Busqueda from './Busqueda'
import productosContext from './../context/productosContext';
import CardProducto from './CardProducto'
import BreadCumb from "./BreadCumb";
import clienteAxios from "../config/axios";
import NoRecords from "./NoRecords";

const ListaProductos = (props) => {

  //Obtener state de context
  const productoContext = useContext(productosContext);
  const { 
    listaProductos,
    mostrarError,
    seleccionarProducto, 
    obtenerProductos,
    obtenerCategorias,
    manejarError
  } = productoContext;

  // Capturamos queryParam desde url
  const queryParam = props.location.search;
  const params = new URLSearchParams(queryParam);
  const search = params.get('search'); 
  
  useEffect(() => {
    if(search != null) { 
      buscarItems();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const buscarItems = async () => {
    try {
      clienteAxios.get(
        `${process.env.REACT_APP_REST_ENDPOINT}items/?q=${search}`
      ).then(res => {
        const { items, categories } = res.data;
        obtenerProductos(items);
        obtenerCategorias(categories);
        seleccionarProducto({});
      })
      .catch(err => {
        manejarError(true)
      })
    } catch (error) {}
  }

  // Encargado de redirigir al detalle del item
  const verProducto = producto => {
    seleccionarProducto(producto);
    props.history.push(`/items/${producto.id}`);
  };

  return (
    <Fragment>
    <Busqueda />
    
    <div>
      {listaProductos.length > 0 ?
        (
          <Fragment>
            <BreadCumb />
            {listaProductos.map(producto => (
            <CardProducto
              key={producto.id}
              producto={producto}
              verProducto={verProducto}
            />
          ))}
          </Fragment>
        ) : null
      }
      { mostrarError ? (<NoRecords />) : null}
      
    </div>
    </Fragment>
  );
};

export default ListaProductos;
