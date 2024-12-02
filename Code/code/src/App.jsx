import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Table1 from './components/Table1'
import Table2 from './components/Table2'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} >
        <Route path='/' element={<Table1/>}></Route>
        <Route path='/table2' element={<Table2/>}></Route>
      </Route>

    </Routes>
   </BrowserRouter>
  )
}

export default App