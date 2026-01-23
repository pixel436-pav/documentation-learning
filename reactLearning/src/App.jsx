import React from 'react'

// React component - Component is a JS function that we can modify using markup , this lays stress on the concept of reusability , Components can be used multiple times in an APP , components are defined using the syntax written below and their names should be written by making the first letter capital or they won't work

// you should never deinfe a component inside a a component 
export default function App () { // exporting is used to de-clutter the files and also seperate the compornents 
  // export default can only be used once inside a file 
  
  return (
    <h1>
      Good Job!!
    </h1>
  )
}


// to export a second component from the same file we can use only export 

export function Description (){
  return (
    <>
    <div>You have done a very great job in this Project </div>
    </>
  )
}