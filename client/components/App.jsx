import React, {useState, useEffect} from 'react'
import { getPlayers } from '../apiClient'

function allStars() {
  const[nbaInfo, getNbaInfo] = useState('')

  useEffect(() => {
   getPlayers() 
    .then(set => {
      console.log(set)
      getNbaInfo(set)
    })
    .catch(e =>console.log(e))
  }, [])
  

  return (
      <div>
        <h1>Choose your All-Stars!</h1>
        <h1>{nbaInfo}</h1>
      </div>
  )
}

export default allStars