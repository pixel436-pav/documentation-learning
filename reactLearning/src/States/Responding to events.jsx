import React from 'react'


// Some things require User interactivity - means response from user to work with things - In React that data changes Over Time is known as STATE , state can be added in any component 

// React lets you add event handlers in your jsx components 

// this written under will execute immedietly

// const onClick = alert("Your are clicking on the button")




const Sate = ({value, onClick}) => {

  return (
    <div>
      <button onClick={onClick} > {value} </button>
    </div>
  )
}



export default Sate
