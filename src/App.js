import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Studentlist from './pages/Studentlist';
import About from './pages/About';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Select from './pages/Select';
import Soon from './pages/Soon';


// ✅ NEW COMPONENT
function AppContent() {

  const location = useLocation();

  const showFooter = location.pathname === '/';

  return (
    <>
      <Navbar />

      <div className="pages">

        <Routes>

          <Route
            path="/"
            element={
              <>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="teachers"><Teachers /></section>
                <section id="contact"><Contact /></section>
              </>
            }
          />

          
          <Route path='/select' element={<Select />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/studentlist' element={<Studentlist />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/soon' element={<Soon />} />
        </Routes>

       
        {showFooter && <Footer />}

      </div>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

