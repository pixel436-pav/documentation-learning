// Root Componrnt File  

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// importing another function from the same file
import { Description, TodoList, Avatar, Tutorial, PackingList} from './App.jsx'




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
  
  {/* // as i have passed these above values as props here now i can read them inside Avatar function inside its file */}

  </StrictMode>,
)
