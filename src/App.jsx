
import { Outlet } from 'react-router'
import NavMenu from './components/NavMenu'
import './App.css'
import Header from './components/Header'
import Category from './components/Category'

function App() {


  return (
    <>
      <NavMenu></NavMenu>
      <Header></Header>
      <Category></Category>
      
      <Outlet>

      </Outlet>
    </>
  )
}

export default App
