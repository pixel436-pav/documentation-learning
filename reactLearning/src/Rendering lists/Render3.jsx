import React from 'react'
import PropTypes from 'prop-types'

const Render3 = (props) => {


  // fruits.sort((a,b) => { return  a.name.localeCompare(b.name) // alphabetical order   
  // fruits.sort((a,b) => { return b.name.localeCompare(a.name) // Reverse alphabetical order   
    
  // }
  // )

  // // const lowCalFruits = fruits.filter(lowCalFruit => { return lowCalFruit.calories < 100 }  ) - // for low cal fruits
  // const highCalFruits = fruits.filter(highCalFruit => { return highCalFruit.calories  >= 100 }  )

  //   // here don't be confused with singular fruit WORD , We are just receiveing them here as a parameter here so no matter how we recieve it , it can be fruit or fruits or f or anything as just for the convinience we use fruit
  //   const listItems = highCalFruits.map((highCalFruit,index) => {
  //       return <li key={index}>{highCalFruit.name}:&nbsp;<b>{highCalFruit.calories}</b></li> // as we are passing index as key prop problem with it is that it sticks to the position not the object
      
  //   });

  const itemList = props.items

  const listItems = itemList.map(item=> { return <li> {item.name}: {item.calories}</li> })


  return (
    <ol>{listItems}</ol>
  )
}

export default Render3
