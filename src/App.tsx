import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import { FrontVar } from './components/common/FrontVar'


function App() {

  return (
    <BrowserRouter>
      <FrontVar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
