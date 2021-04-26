import React, { useState } from 'react'

const Movement = () => {
  const [id, setId] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const sendData = async () => {
    await fetch(
      `https://cors-anywhere.herokuapp.com/https://inqbitbackend.herokuapp.com/api/v1/movement`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movement_id: id,
          timestamps: new Date(),
          from_location_id: from,
          to_location_id: to,
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => console.log(result))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendData()
    setId('')
    setTo('')
    setFrom('')
  }
  return (
    <div className="products">
      <h3>Movement</h3>
      <form>
        <input
          type="text"
          placeholder="Movement_ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <br />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          create
        </button>
      </form>
    </div>
  )
}

export default Movement
