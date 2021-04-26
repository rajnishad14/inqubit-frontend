import React, { useContext } from 'react'
import { WarehouseContext } from '../context'

const DisplayProduct = () => {
  const { products, getProducts } = useContext(WarehouseContext)
  return (
    <div className="container">
      <button className="disp-btn" onClick={() => getProducts()}>
        GetProducts
      </button>
      <div className="display">
        <ol>
          {products.map((loc) => {
            const { product_id, description } = loc
            return (
              <li key={product_id}>
                <p>ProductsID: {product_id}</p>
                <p>Description: {description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default DisplayProduct
