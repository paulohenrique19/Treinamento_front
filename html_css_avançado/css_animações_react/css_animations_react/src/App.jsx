import './App.css'
import { useState } from 'react'

import CSS_Transitions from './Components/CSS_Transitions'

function App() {

  const [ShowAnimation, setShowAnimation] = useState(1)

  return (
    <>
      <div>
        <CSS_Transitions />
      </div>  
    </>
  )
}

export default App
