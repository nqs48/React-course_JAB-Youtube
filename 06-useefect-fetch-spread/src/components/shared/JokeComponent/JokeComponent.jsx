import React from "react";

function JokeComponent(props){

  
  const {joke}= props;
  
  
  return(
    <>
      <div className="cardJoke">
        <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="joke gif" />
        <p>{joke.value}</p>
      </div>
    </>
  )
}

JokeComponent.defaultProps= {
  joke: {
    value: "Waiting a new Joke... "
  }
}


export default JokeComponent