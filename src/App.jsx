import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
