import React, { useState } from 'react'




// index is a state variable 
// setIndex is a setter function 



// Components often needs to change whats on the screen as a result of interaction 
const UseState = () => {
  const [index, setIndex] = useState(0); // state is just one of those features that meet other hooks later 
  // when we use useState then you are telling react that you want this function to remember something 
  function handleClick (){
  setIndex(index + 1)
}
  return (
    <div>
      
    </div>
  )
  // in react useState or any other function starting with use is called a hook
 // -- Hooks are special functions that are only available while the react is rendering  
}

export default UseState
