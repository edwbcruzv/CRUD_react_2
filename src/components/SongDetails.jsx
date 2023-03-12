import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import PropTypes from 'prop-types'

function SongDetails({search,lyric,bio}) {
  return (
    <div>
      Song Details
      <SongArtist/>
      <SongLyric/>
    </div>
  )
}

SongDetails.propTypes={
  search:PropTypes.string.isRequired,
  lyric:PropTypes.string.isRequired,
  bio:PropTypes.string.isRequired
}

export default SongDetails