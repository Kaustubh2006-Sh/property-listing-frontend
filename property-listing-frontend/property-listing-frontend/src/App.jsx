import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddProperty from './pages/AddProperty'
import PropertyDetails from './pages/PropertyDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProperty />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  )
}

export default App
