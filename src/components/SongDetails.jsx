import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import PropTypes from 'prop-types'

function SongDetails({search,lyric,bio}) {
  return (
    <div>
      <h1>{search.artist}  {search.song}</h1>
      <SongArtist bio={bio}/>
      <SongLyric lyric={lyric}/>
    </div>
  )
}

SongDetails.propTypes={
  search:PropTypes.object.isRequired,
  lyric:PropTypes.string.isRequired,
  bio:PropTypes.string.isRequired
}

export default SongDetails