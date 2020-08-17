import React, { Fragment, useContext } from "react";
import productosContext from "./../context/productosContext";
import Busqueda from "./Busqueda";
import BreadCumb from "./BreadCumb";
import NoRecords from "./NoRecords";

const Producto = (props) => {
  
  //Obtener state del context
  const productoContext = useContext(productosContext);
  const { 
    productoSeleccionado,
    mostrarError,
    manejarError
  } = productoContext;

  if (Object.entries(productoSeleccionado).length === 0) {
    manejarError(true);
    props.history.push("/");
  }

  return (
    <Fragment>
      <Busqueda />
      {
        Object.entries(productoSeleccionado).length > 0 ?
        (
          <Fragment>
          <BreadCumb />
            <div
              className="uk-card uk-card-default uk-grid-collapse list-cards"
              uk-grid="true"
            >
              <div className="uk-card-media-left uk-width-2-3@m container-img">
                <img
                  src={productoSeleccionado.picture}
                  alt=""
                  className="image-product-detail"
                ></img>
              </div>
              <div className="uk-width-1-3@m">
                <div className="uk-card-body item-info">
                  <p className="condition-item-detail margin-32">
                    {productoSeleccionado.condition} - {productoSeleccionado.sold_quantity} vendidos
                  </p>
                  <p className="item-title-detail">{productoSeleccionado.title}</p>
                  <h3 className="uk-card-title price-item-detail margin-32">
                    $ {productoSeleccionado.price.price}
                    {productoSeleccionado.decimals ? (
                      <span className="decimals">
                        {productoSeleccionado.decimals}
                      </span>
                    ) : null}
                  </h3>
                  <button className="uk-button uk-width-1-1 btn-comprar">
                    Comprar
                  </button>
                </div>
              </div>
              <div className="uk-width-1-2 item-description-detail">
                <h3>Descripción del producto</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  lectus tellus, mollis nec dapibus ut, commodo ornare nisi. Etiam
                  ullamcorper leo et pellentesque consectetur. Phasellus aliquet
                  lectus eget ante accumsan feugiat. Proin augue quam, ullamcorper
                  eget iaculis nec, tempor at mauris.
                </p>
              </div>
            </div>
          </Fragment>
        ): null
      }

      { mostrarError ? <NoRecords /> : null}
      
    </Fragment>

    /*<div className={classes.root}>
      <Card className={classes.paper}>
        <CardActionArea>
          <CardContent>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs={7}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body2" color="textSecondary" component="p" fontWeight="fontWeightMedium">
                  Nuevo - 234 vendidos
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" fontWeight="fontWeightMedium">
                  Telefono del putas
                </Typography>
                <Typography  variant="h2" fontWeight="fontWeightMedium">
                  $ 120000
                </Typography>
                <Button color='primary' fullWidth='true'>Comprar</Button>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>*/
  );
};

export default Producto;
