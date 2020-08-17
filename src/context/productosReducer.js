import { 
    CARGAR_PRODUCTOS, 
    CARGAR_CATEGORIAS, 
    GUARDAR_CONSULTA, 
    SELECCIONAR_PRODUCTO,
    MANEJAR_ERROR
} from "../types";


export default (state, action) => {
    switch(action.type) {

        case CARGAR_PRODUCTOS:
            return {
                ...state,
                listaProductos: action.payload
            }
        case GUARDAR_CONSULTA:
            return {
                ...state,
                consulta: action.payload
            }
        case SELECCIONAR_PRODUCTO:
            return {
                ...state,
                productoSeleccionado: action.payload
            }
        case CARGAR_CATEGORIAS:
            return {
                ...state,
                categorias: action.payload
            }
        case MANEJAR_ERROR:
            return {
                ...state,
                mostrarError: action.payload
            }
        default:
            return state;
    }
}