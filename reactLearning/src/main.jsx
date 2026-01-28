// Root Componrnt File  

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// importing another function from the same file
import { Description, TodoList, Avatar, Tutorial, PackingList} from './App.jsx'
import Render from './Rendering lists/Render.jsx'
import Render2 from './Rendering lists/Render2.jsx'
import Render3 from './Rendering lists/Render3.jsx'
import {Hello,Guest} from './Pure Components/Pure.jsx'
import Pure from './Pure Components/Pure.jsx'
import Ui from './Ui.jsx'
import Sate from './States/Responding to events.jsx'

const fruits = [
  { id: 21, name: "apple", calories: 52 },
  { id: 22, name: "banana", calories: 89 },
  { id: 23, name: "orange", calories: 102 },
  { id: 24, name: "pineapple", calories: 100 }
];

const vegetables = [
  { id: 1, name: "broccoli", calories: 34 },
  { id: 2, name: "carrot", calories: 41 },
  { id: 3, name: "spinach", calories: 23 },
  { id: 4, name: "tomato", calories: 18 },
  { id: 5, name: "potato", calories: 77 },
  { id: 6, name: "cucumber", calories: 16 },
  { id: 7, name: "bell pepper", calories: 31 },
  { id: 8, name: "cauliflower", calories: 25 }
];

 function TeaGathering(){
    const cups = [];
    for (let i = 0; i < 5; i++) {
      
      cups.push( <Guest key={i} guest={i}/> )
    }
    return cups;
  }

const root = createRoot(document.getElementById('root'))




root.render(


  <StrictMode>
    <App/>
    <Description/>
    <TodoList/>
    <Avatar 
    person={{ name: 'lin Lanying', imageId: '1bX5QH6'}}
    size={100}/>
    <Tutorial/>
    <PackingList />
    <Render />
    <Render2 />
    <Render3 items={fruits} category="Fruits"/>
    <Render3 items={vegetables} category="Vegetables"/>
    <Pure drinkers={4} />
    <Hello />
    <Guest guest={2}/>
    <Guest guest={4}/>
    <Guest guest={5}/>
    <TeaGathering/>
    <Ui/>
    <Sate value={2} onClick = {() => 
        alert("Your are clicking on the button")
     }/>
    <Sate value={10} onClick = {()=>
      alert("Yes it is the value 10")
    }/>
  
  {/* // as i have passed these above values as props here now i can read them inside Avatar function inside its file */}

  </StrictMode>,
  
 

  )