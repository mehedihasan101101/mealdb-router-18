
import { Outlet } from 'react-router'
import NavMenu from './components/NavMenu'
import './App.css'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <NavMenu></NavMenu>
      <Outlet>

      </Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
