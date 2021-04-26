import React, { useState } from 'react'

const Location = () => {
  const [id, setId] = useState('')
  const [desc, setDesc] = useState('')
  const sendData = async () => {
    await fetch(
      `https://cors-anywhere.herokuapp.com/https://inqbitbackend.herokuapp.com/api/v1/location`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location_id: id, description: desc }),
      }
    )
      .then((res) => res.json())
      .then((result) => console.log(result))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    sendData()
    setId('')
    setDesc('')
  }
  return (
    <div className="products">
      <h3>Location</h3>
      <form>
        <input
          type="text"
          placeholder="Location_ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          create
        </button>
      </form>
    </div>
  )
}

export default Location
