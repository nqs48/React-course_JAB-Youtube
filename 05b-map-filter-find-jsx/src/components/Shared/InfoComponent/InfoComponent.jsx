import React from 'react'

function InfoComponent({info}) {
  return (
    <>
    <div className='containerInfo'>
      <h3>
        {info}
      </h3>
    </div>
    
    </>
  )
}

InfoComponent.defaultProps = {
  info: "Intentelo de nuevo"
}

export default InfoComponent