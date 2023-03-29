import React, {useState, useEffect} from "react";
import CardComponent from "../shared/CardComponent/CardComponent";

function ExplicationComponent() {

const [users, setUsers] = useState([]);

  useEffect(()=>{
    const req= fetch("https://randomuser.me/api/?results=10");
    req.then(data => data.json())
    .then(({results}) => {
      setUsers(results)
      console.log(results)
    })
    .catch(error => console.log(error));
  },[])

  return (
    <>
      <div className="container">
        {
          users.map(user => (<CardComponent key={user.email} user={user} />)
          )
        }
      </div>
    </>
  )
}


/**
 * Equivalente utilizando async y await
 */
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const response = await fetch("https://randomuser.me/api/?results=10");
  //     const data = await response.json();
  //     setUsers(data.results);
  //   };
  //   getUsers();
  // }, []);

export default ExplicationComponent