
import React, { useReducer } from 'react';
import productoContext from './productosContext';
import productoReducer from './productosReducer';
import clienteAxios from "../config/axios";

import { 
    CARGAR_PRODUCTOS,
    CARGAR_CATEGORIAS,
    GUARDAR_CONSULTA,
    SELECCIONAR_PRODUCTO,
    MANEJAR_ERROR
 } from '../types'

const ProyectoState = props => {


    const initialState = {
        consulta: '',
        listaProductos : [],
        categorias: [],
        productoSeleccionado: {},
        mostrarError: false
    }

    // Dispatch para ejecutar acciones
    const [ state, dispatch] = useReducer(productoReducer,initialState)

    // Encargado de disparar el evento para guardar la consulta en el state
    const guardarConsulta = consulta => {
        dispatch({
            type: GUARDAR_CONSULTA,
            payload: consulta
        })
    }

    // Encargado de consultar items desde el api
    const apiRequestItems = search => {
        limpiarResultados()
        clienteAxios.get(
            `${process.env.REACT_APP_REST_ENDPOINT}items/?q=${search}`
          ).then(res => {
            const { items, categories } = res.data;
            obtenerProductos(items);
            obtenerCategorias(categories);
            guardarConsulta(search);
          })
          .catch(err => {
            manejarError(true)
          })
    }

    // Encargado de disparar el evento para obtener productos segun consulta
    const obtenerProductos = listaProductos => {
        dispatch({
            type:CARGAR_PRODUCTOS,
            payload: listaProductos
        })
    }

    // Encargado de disparar el evento para guardar producto seleccionado
    const seleccionarProducto = producto => {
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: producto
        })
    }

    // Encargado de cargar las categorias al State
    const obtenerCategorias = categorias => {
        dispatch({
            type: CARGAR_CATEGORIAS,
            payload: categorias
        })
    }

    // Encargado de cambiar el error en state
    const manejarError = bool => {
        dispatch({
            type: MANEJAR_ERROR,
            payload: bool
        })
    }

    // Limpiar resultados de busqueda
    const limpiarResultados = () => {
        obtenerProductos([]);
        obtenerCategorias([]);
        seleccionarProducto({});
    }

    return (
        <productoContext.Provider
            value={{
                consulta: state.consulta,
                listaProductos: state.listaProductos,
                categorias: state.categorias,
                productoSeleccionado: state.productoSeleccionado,
                mostrarError: state.mostrarError,
                guardarConsulta,
                apiRequestItems,
                obtenerProductos,
                obtenerCategorias,
                seleccionarProducto,
                manejarError
            }}
        >
            {props.children}
        </productoContext.Provider>
    )
}

export default ProyectoState;