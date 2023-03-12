import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'

const initialForm={
  artist:"",
  song:""
}

function SongForm({handleSearch}) {
  const [form, setForm] = useState(initialForm)

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.artist || !form.song) {
      alert("datos incompletos")
    } else {
      handleSearch(form)
      setForm(initialForm)
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='artist' placeholder='Nombre del interprete' onChange={handleChange} value={form.artist}/>
        <input type="text" name='song' placeholder='Nombre de la cancion' onChange={handleChange} value={form.song}/>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

SongForm.propTypes={
  handleSearch:PropTypes.func.isRequired
}

export default SongForm