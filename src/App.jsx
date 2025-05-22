
import { Outlet } from 'react-router'
import NavMenu from './components/NavMenu'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <>
      <NavMenu></NavMenu>
      <Header></Header>
      <h1 className='text-center text-5xl mt-8 font-bold'>Categories</h1>
      <Outlet>

      </Outlet>
    </>
  )
}

export default App
