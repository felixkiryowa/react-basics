/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react"
import productsData from "./vschoolProducts"
import Products from './Products'
function ProductList() {
    // const store_array = [];
    // productsData.map(product => {
    //     if(product.price < 2 ) {
    //         console.log("Price less Than 2");
    //     }else {
    //         store_array.push(product);
    //     }

    //     return store_array;
    // }
    // )
    const result_array = productsData.filter(product =>product.price > 2);

    // const filtered_array = store_array.map(prod => {
    //     return <Products  key={prod.id}
    //     specific_product = {{
    //         name:prod.name,
    //         price:prod.price,
    //         description:prod.description 
            
    //         }}
            
    //         />
    // })

    const filtered_array = result_array.map(prod => {
        return <Products  key={prod.id}
        specific_product = {{
            name:prod.name,
            price:prod.price,
            description:prod.description 
            
            }}
            
            />
    })

  return (
    <div>
       {filtered_array}     
    </div>
  )
}

export default ProductList