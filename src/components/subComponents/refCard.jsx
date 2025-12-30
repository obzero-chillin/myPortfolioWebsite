/*refCard.jsx*/ 

import React from 'react'
import './css/refCard.css'
import ref1 from '../../assets/ref001.png'
const RefCard = ({image, name, onOpen}) => {
  return (
    <div className='refCard' role='button' onClick={()=>{onOpen()}}>
      <img src={image} />
      <hr></hr>
      <h4>{name}</h4>
        

    </div>
  )
}

export default RefCard