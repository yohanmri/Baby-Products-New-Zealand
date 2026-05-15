import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar          from './components/layout/Navbar'
import Footer          from './components/layout/Footer'
import GlobalFrame    from './components/layout/GlobalFrame'
import Home            from './pages/Home'
import BabyEssentials  from './pages/BabyEssentials'
import Promotions      from './pages/Promotions'
import RoomDecorations from './pages/RoomDecorations'
import HealthProducts  from './pages/HealthProducts'
import FoodSupports    from './pages/FoodSupports'
import Services        from './pages/Services'
import About           from './pages/About'
import Contact         from './pages/Contact'
import Shop            from './pages/Shop'
import Astrology       from './pages/services/Astrology'
import Food            from './pages/services/Food'
import Nanny           from './pages/services/Nanny'
import TraditionalEvents from './pages/services/TraditionalEvents'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <GlobalFrame />
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
            <Route path="/services/astrology" element={<Astrology />}    />
            <Route path="/services/food"      element={<Food />}         />
            <Route path="/services/nanny"     element={<Nanny />}        />
            <Route path="/services/traditional-events" element={<TraditionalEvents />} />
            <Route path="/shop"             element={<Shop />}            />
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
