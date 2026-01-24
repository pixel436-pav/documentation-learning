// Root Componrnt File  

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// importing another function from the same file
import { Description, TodoList, Avatar, Tutorial, PackingList} from './App.jsx'
import Render from './Rendering lists/Render.jsx'
import Render2 from './Rendering lists/Render2.jsx'
import Render3 from './Rendering lists/Render3.jsx'




createRoot(document.getElementById('root')).render(
 
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
    <Render3 />
  
  {/* // as i have passed these above values as props here now i can read them inside Avatar function inside its file */}

  </StrictMode>,
)
