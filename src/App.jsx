import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar          from './components/layout/Navbar'
import Footer          from './components/layout/Footer'
import Home            from './pages/Home'
import BabyEssentials  from './pages/BabyEssentials'
import Promotions      from './pages/Promotions'
import RoomDecorations from './pages/RoomDecorations'
import HealthProducts  from './pages/HealthProducts'
import FoodSupports    from './pages/FoodSupports'
import Services        from './pages/Services'
import About           from './pages/About'
import Contact         from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"                 element={<Home />}            />
            <Route path="/baby-essentials"  element={<BabyEssentials />}  />
            <Route path="/promotions"       element={<Promotions />}      />
            <Route path="/room-decorations" element={<RoomDecorations />} />
            <Route path="/health-products"  element={<HealthProducts />}  />
            <Route path="/food-supports"    element={<FoodSupports />}    />
            <Route path="/services"         element={<Services />}        />
            <Route path="/about"            element={<About />}           />
            <Route path="/contact"          element={<Contact />}         />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
