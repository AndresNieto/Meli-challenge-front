import React, { useContext } from "react";
import productosContext from './../context/productosContext';

const BreadCumb = () => {

  //Obtener state del context
  const productoContext = useContext(productosContext);
  const { 
    productoSeleccionado, 
    categorias 
  } = productoContext;

  return (
    <ul className="uk-breadcrumb breadCumb">
        {categorias.length > 0 ? 
          (
            categorias.map(categoria => (
              <li key={categoria}>
                  <a href="#!">{categoria}</a>
              </li>
          ))
          ) : null
        }
        { Object.keys(productoSeleccionado).length === 0 ? null :
            (
               <li>
                    <span>{productoSeleccionado.title}</span>
                </li> 
            )
        }
      
    </ul>
  );
};

export default BreadCumb;
