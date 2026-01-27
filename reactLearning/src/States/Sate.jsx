import React from 'react'


// Some things require User interactivity - means response from user to work with things - In React that data changes Over Time is known as STATE , state can be added in any component 

// this written under will execute immedietly

// const onClick = alert("Your are clicking on the button")

const Sate = () => {
    const onClick = () => {
        alert("Your are clicking on the button")
    }
  return (
    <div>
      <button onClick={onClick}> Hello </button>
    </div>
  )
}



export default Sate
