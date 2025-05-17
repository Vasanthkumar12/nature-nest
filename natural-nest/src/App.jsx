import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing'
import { Register } from './authentication/Register'
import { SignIn } from './authentication/SignIn'
import { ViewProductDetails } from './components/products/ViewProductDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/view-details/:id' element={<ViewProductDetails />} />
      </Routes>
    </>
  )
}

export default App
