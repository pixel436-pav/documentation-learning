import React from 'react'

const Render3 = () => {
    const fruits = [
  { name: "apple", calories: 52 },
  { name: "banana", calories: 89 },
  { name: "orange", calories: 47 },
  { name: "pineapple", calories: 50 }
];

    // here don't be confused with singular fruit WORD , We are just receiveing them here as a parameter here so no matter how we recieve it , it can be fruit or fruits or f or anything as just for the convinience we use fruit
    const listItems = fruits.map((fruit,index) => {
        return <li key={index}>{fruit.name}</li>
      
    });

  return (
    <ol>{listItems}</ol>
  )
}

export default Render3
