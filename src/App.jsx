
import { Outlet } from 'react-router'
import NavMenu from './components/NavMenu'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <>
      <NavMenu></NavMenu>
      <Header></Header>
      <Outlet>

      </Outlet>
    </>
  )
}

export default App
