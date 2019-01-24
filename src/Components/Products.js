import React from 'react';


function Products(props) {
    return (
        <div>
          <h4 style={{color:"green"}}>Name :{props.specific_product.name}</h4>
          <small style={{color:"red"}}>Price: {props.specific_product.price}</small>
          <p style={{color:"purple"}}>Description : {props.specific_product.description}</p>
          <hr></hr>
        </div>
        
    )
}
export default Products;