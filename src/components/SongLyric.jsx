import React from 'react'
import PropTypes from 'prop-types'

function SongLyric({lyric}) {
  return (
    <h3>{lyric}</h3>
  )
}

SongLyric.propTypes = {
  lyric:PropTypes.string.isRequired
}

export default SongLyric
