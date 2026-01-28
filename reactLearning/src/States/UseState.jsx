import React, { useState } from 'react'




// index is a state variable 
// setIndex is a setter function 



// Components often needs to change whats on the screen as a result of interaction 
const UseState = () => {
  const [index, setIndex] = useState(0);
  function handleClick (){
  setIndex(index + 1)
}
  return (
    <div>
      
    </div>
  )
}

export default UseState
