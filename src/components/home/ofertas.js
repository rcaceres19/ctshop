import React from 'react';
import Product from '../productCard';

const Ofertas = props => {
  return(
    <section className="section">
      <div className="container">
        <h4 className="title is-4 has-text-weight-bold">{props.title}</h4>
        <hr/>
        <div className="row">
          <div className="columns is-multiline is-mobile">
            {props.ofertas.map( oferta => <Product product={oferta}/>)}
          </div>{/*  Columns */}
        </div>
      </div>
    </section>
  );
};

export default Ofertas;