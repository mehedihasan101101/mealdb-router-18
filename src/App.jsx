
import { Outlet } from 'react-router'
import NavMenu from './components/NavMenu'
import './App.css'
import Footer from './components/Footer'
import Category from './components/Category'
import Header from './components/Header'

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
