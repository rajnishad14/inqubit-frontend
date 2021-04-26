import React, { useContext } from 'react'
import { WarehouseContext } from '../context'

const DisplayLocation = () => {
  const { locations, getLocations } = useContext(WarehouseContext)
  return (
    <div className="container">
      <button className="disp-btn" onClick={() => getLocations()}>
        GetLocations
      </button>
      <div className="display">
        <ol>
          {locations.map((loc) => {
            const { location_id, description } = loc
            return (
              <li key={location_id}>
                <p>LocationID: {location_id}</p>
                <p>Description: {description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default DisplayLocation
