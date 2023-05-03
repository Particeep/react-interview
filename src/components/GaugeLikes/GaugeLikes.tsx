import React from 'react'

import './GaugeLikes.scss'

interface GaugeLikesProps {
  pourentage: number;
  description?: string;
}
function GaugeLikes({pourentage, description}: GaugeLikesProps) {

  const styleContent = {width:pourentage+'%' }
  return (
    <div className='gauge'>
    <div className='gauge__shape'>
      <div className='gauge__content' style={styleContent}/>
    </div>
    {
      description && <h3 className='gauge__description'>{pourentage}% {description}</h3>
    }

    </div>

  )
}

export default GaugeLikes
