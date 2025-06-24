import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import ListarUsuarios from './pages/Lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <h1 className='bg-green-700 text-white p-4 shadow-md text-2xl text-center'>Sistema para cadastro de usuarios</h1>
      <Routes>
        <Route path='/' element={<Cadastro/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/listarUsuarios' element={<ListarUsuarios/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
