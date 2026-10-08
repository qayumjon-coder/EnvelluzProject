import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </>
  )
}

export default App
