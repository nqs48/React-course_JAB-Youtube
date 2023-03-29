import React, {useEffect, useState} from "react"
import JokeComponent from "../shared/JokeComponent/JokeComponent";
import "../shared/JokeComponent/JokeComponent.css"

function ChallengeJokeComponent(){

  const [joke,setJoke]= useState({})
  const [count, setCount] = useState(2)

  useEffect(()=>{
    let url= "https://api.chucknorris.io/jokes/random";

    const request= async ()=>{
      const res= await fetch(url);
      const data= await res.json();
      setJoke(data)
      console.log(data)
    }
    request();
  },[count])

    const nextJoke= ()=>{
    setCount(count+1);
  }


  return(
    <>
      <div style={{display: "flex", justifyContent:"center"}}>
        <JokeComponent joke={joke}/>
        <button onClick={nextJoke}>Next</button>
      </div>
    </>
  )
}

export default ChallengeJokeComponent