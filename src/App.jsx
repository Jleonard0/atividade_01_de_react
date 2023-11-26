import { useState } from 'react'
import Head from './components/Head'
import { Transporte } from './components/Transporte/Transporte'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />
      <main className='vh-100 container text-center'>
        <h2>Registro de veiculos</h2>
        <Transporte></Transporte>
      </main>
    </>
  )
}

export default App
