import React from 'react'
import "./loading.css"
import { SyncLoader } from 'react-spinners'
const Loading = () => {
  return (
    <div className='loading'>
        <p>Preparando la experiencia</p>
        <SyncLoader color="#574e46" />
    </div>
  )
}
export default Loading