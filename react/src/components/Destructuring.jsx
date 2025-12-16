import React from 'react'

/* function Destructuring(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
    </div>
  )
} */

  function Destructuring({name, age}){
    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
  }

export default Destructuring