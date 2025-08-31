import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <div className='container my-5'>
          <Home/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
