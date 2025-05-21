
import { Outlet } from 'react-router'
import NavMenu from '../components/NavMenu'
import './App.css'

function App() {


  return (
    <>
      <NavMenu></NavMenu>
      <Outlet></Outlet>
    </>
  )
}

export default App
