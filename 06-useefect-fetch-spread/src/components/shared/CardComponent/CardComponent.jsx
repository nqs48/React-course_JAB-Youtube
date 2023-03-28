import React from 'react'

function CardComponent(props) {

  const {user}= props;

  return (
    <>
      <div className="card">
        <h2 style={{color: '#282c34'}}>{user.name.title} {user.name.first}</h2>
        <img
            className="profile"
            src={user?.picture.large}
            alt=""
        />
          <div>
            <h3>Age: {user?.dob.age}</h3>
            <h3>Country: {user?.location.country}</h3>
            <h3>Phone: {user?.phone}</h3>
          </div> 
      </div>
    
    </> 
  )
}

export default CardComponent