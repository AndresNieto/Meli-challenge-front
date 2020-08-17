import React from "react";
import iconShipping from "./../assets/ic_shipping.png";


const CardProducto = (props) => {
  const { producto, verProducto } = props;

  return (
    <div
      className="uk-card uk-card-default uk-grid-collapse list-cards"
      uk-grid="true"
      onClick={() => verProducto(producto)}
    >
      <div className=" uk-width-1-4 uk-card-media-left uk-cover-container container-img">
        <img src={producto.picture} alt="" className="imgProductList"></img>
      </div>
      <div className="uk-width-1-2@m uk-width-1-1@s">
        <div className="uk-card-body item-info">
          <h3 className="uk-card-title item-price">$ {producto.price.price} 
          { producto.decimals ? 
          (<span className="decimals">{producto.decimals}</span>) : null}
          {producto.free_shiping ? 
            (
              <span className="shipping"><img src={iconShipping} alt="shipping"></img></span>
            ): null
          }
          </h3>
          <p className="title-product">{producto.title}</p>
        </div>
      </div>
      <div className="uk-width-1-4">
        <div className="uk-card-body item-info">
          <p className="item-city">{producto.city}</p>
        </div>
      </div>
    </div>
    /*<Card className="list-cards" onClick={() => verProducto()}>
            <CardActionArea className="card-product">
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs={3}>
                  <img
                    src={producto.picture}
                    className="imgProductList"
                    alt={producto.picture}
                  ></img>
                </Grid>
                <Grid item xs={5}>
                  <Typography gutterBottom variant="h5" component="h2" className="price-product">
                    $ {producto.price.price}
                  </Typography>
                  <Typography variant="subtittle2" component="subtittle2">
                    {producto.title}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {producto.free_shiping}
                  </Typography>
                </Grid>
              </Grid>
            </CardActionArea>
        </Card>*/
  );
};

export default CardProducto;
