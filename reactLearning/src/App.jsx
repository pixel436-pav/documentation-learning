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

// JSX is a javascript extension that lets us write html like markup inside javaScript Function

// from years JS and html are main things to write html -- days were when interactivity was very rare with web pages but as of now webSites are expected to have interactivity so to do so react allows us to write jsx (markup) within the js function to allow it to be in a sync

// putting exact html to a react component won't work as jsx is a bit more stricter so we need know some more rules 

export function TodoList() {

  const name = 'Pavneet Singh' // using curly braces

  // JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.
  return ( 
    // <></> these tags are called fragments used to wrap jsx elements

    // JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.
    <> 
    <h1>Hedy Lamarr's Todos</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 

    />
    {/* json and styles in css use double curly braces in jsx  */}
    <ul style={{
      backgroundColor:'black',
      color:'pink'
    }}>
      <li>I want to meet Sr. {name} todays</li>
      <li>invent</li>
      <li>delete</li>
      <li>import</li>
    </ul>
    </>
  )
}

// Using javaScript in JSX - sometimes to write some logic in the markup we need jsx but to do so we use {} - curly braces

 export function Avatar(){

  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img src={avatar} alt={description} className='avatar' />
  );

}

