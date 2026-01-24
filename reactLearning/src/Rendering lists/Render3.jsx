import React from 'react'

const Render3 = () => {
    const fruits = [
  { name: "apple", calories: 52 },
  { name: "banana", calories: 89 },
  { name: "orange", calories: 102 },
  { name: "pineapple", calories: 100 }
];

  // fruits.sort((a,b) => { return  a.name.localeCompare(b.name) // alphabetical order   
  // fruits.sort((a,b) => { return b.name.localeCompare(a.name) // Reverse alphabetical order   
    
  // }
  // )

  // const lowCalFruits = fruits.filter(lowCalFruit => { return lowCalFruit.calories < 100 }  ) - // for low cal fruits
  const highCalFruits = fruits.filter(highCalFruit => { return highCalFruit.calories  >= 100 }  )

    // here don't be confused with singular fruit WORD , We are just receiveing them here as a parameter here so no matter how we recieve it , it can be fruit or fruits or f or anything as just for the convinience we use fruit
    const listItems = highCalFruits.map((highCalFruit,index) => {
        return <li key={index}>{highCalFruit.name}:&nbsp;<b>{highCalFruit.calories}</b></li> // as we are passing index as key prop problem with it is that it sticks to the position not the object
      
    });

  return (
    <ol>{listItems}</ol>
  )
}

export default Render3
