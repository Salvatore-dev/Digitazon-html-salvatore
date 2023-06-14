import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ChatGpt from './ChatGpr'
import CreateImages from './create-images'
import CreateEdit from './create-edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <ChatGpt />
    <CreateImages />
    <CreateEdit />
    </>
  )
}

export default App
