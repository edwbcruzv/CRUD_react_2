import React, {useEffect,useState} from 'react'
import { helperHTTP } from '../helpers/helperHTTP'
import Loader from './Loader'
import SongDetails from './SongDetails'
import SongForm from './SongForm'

function SongSearch() {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search===null) {return}

    async function fetchData() {
      const {artist,song}=search
      
      let artistURL=`https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
      let songURL=`https://api.lyrics.ovh/v1/${artist}/${song}`

      setLoading(true)
       
      const [artistRes,songRes]=await Promise.all([
        helperHTTP().get(artistURL),
        helperHTTP().get(songURL)
      ])
      console.log("artistRes:",artistRes,"songRes",songRes)
      setLyric("aqui deberia de haber una letra, pero no hay")
      setBio(artistRes.artists[0].strBiographyES)

      setLoading(false)
      
    }
    
    fetchData()
  }, [search])
  
  console.log(lyric,bio)

  function handleSearch(data) {
    console.log("data:",data)
    setSearch(data)
  }

  return (
    <div>
      <h2>Song Search</h2>
      

      {loading&&<Loader/>}

      <SongForm handleSearch={handleSearch}/>

      {search && lyric && bio &&
        <SongDetails search={search} lyric={lyric} bio={bio}/>
      }
      
    </div>
  )
}

export default SongSearch