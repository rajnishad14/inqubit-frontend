import React, { useContext } from 'react'
import { WarehouseContext } from '../context'

const DisplayMovement = () => {
  const { movements, getMovements } = useContext(WarehouseContext)
  return (
    <div className="container">
      <button className="disp-btn" onClick={() => getMovements()}>
        GetMovements
      </button>
      <div className="display">
        <ol>
          {movements.map((loc) => {
            const {
              movement_id,
              timestamps,
              from_location_id,
              to_location_id,
            } = loc
            return (
              <li key={movement_id}>
                <p>ProductsID: {movement_id}</p>
                <p>Time: {timestamps}</p>
                <p>From: {from_location_id}</p>
                <p>To: {to_location_id}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default DisplayMovement
