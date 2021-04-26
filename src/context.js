import React, { useState } from 'react'
const WarehouseContext = React.createContext()

const WarehouseContextProvider = ({ children }) => {
  const [locations, setLocations] = useState([])
  const [products, setProducts] = useState([])
  const [movements, setMovements] = useState([])
  const getLocations = async () => {
    await fetch(
      `https://cors-anywhere.herokuapp.com/https://inqbitbackend.herokuapp.com/api/v1/location`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((result) => setLocations(result))
  }
  const getProducts = async () => {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://inqbitbackend.herokuapp.com/api/v1/products`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const result = await res.json()
    setProducts(result)
  }
  const getMovements = async () => {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://inqbitbackend.herokuapp.com/api/v1/movement`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const result = await res.json()
    setMovements(result)
  }
  return (
    <WarehouseContext.Provider
      value={{
        locations,
        products,
        movements,
        getLocations,
        getMovements,
        getProducts,
      }}
    >
      {children}
    </WarehouseContext.Provider>
  )
}

export { WarehouseContextProvider, WarehouseContext }
