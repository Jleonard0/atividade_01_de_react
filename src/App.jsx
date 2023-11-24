import { useState } from 'react'
import Head from './components/Head'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head/>
    </>
  )
}

export default App
