import React from 'react'
import PropTypes from 'prop-types'

function SongArtist({bio}) {
  return (
    <h2>{bio}</h2>
  )
}

SongArtist.propTypes = {
  
  bio:PropTypes.string.isRequired
}

export default SongArtist
