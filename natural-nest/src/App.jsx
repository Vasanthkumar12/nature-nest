import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing'
import { Register } from './authentication/Register'
import { SignIn } from './authentication/SignIn'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </>
  )
}

export default App
