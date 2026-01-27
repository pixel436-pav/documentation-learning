import React from 'react'


// some javascript functions components are pure . pure functions only do calculations and nothing ..strictly writting components as pure functions - bugs can be avoided as the code base grows 

const Pure = ({drinkers}) => {


 return (
    <ol>    

      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );

}

export default Pure


// this component named hello breaks the rule of purity 
let guest = 0;
export const Hello = () => {
    guest = guest+1;
  return (
    <div>
      <ol>
        <li> hello world #{guest} times </li>
      </ol>
    </div>
  )
}

export function Guest ({guest}){
return(
    <div>
       <h2>hi i am your Guest no. {guest}</h2>
    </div>
)
}



// what is a pure function - >
/*
In computer science (and especially the world of functional programming), a pure function is a function with the following characteristics:

It minds its own business. It does not change any objects or variables that existed before it was called.
Same inputs, same output. Given the same inputs, a pure function should always return the same result.
*/

// React assumes that every component you write is a pure function, this means react components we write always return the same jsx that on the same value 