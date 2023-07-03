import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './core/footer/Footer';
import { Header } from './core/header/Header';
import { AuthProvider } from './utilities/auth/AuthProvider';
import { PrivateRoutes } from './utilities/auth/PrivateRoutes';
import { Profile } from './pages/profile/Profile';
import { Login } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';
import { Home } from './pages/home/Home';
import { Shop } from './pages/shop/Shop';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { ShopDetails } from './pages/shop-details/ShopDetails';




function App() {
  return (
    <div className="App">
  
      <AuthProvider>
        <>
          <Header />
          <div className='content-body py-5'>
            <Routes>
              {/* private routes */}
              <Route element={<PrivateRoutes />}>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/shop' element={<Shop />}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/shop/:categoryName' element={<ShopDetails/>}></Route>
                <Route path='/home/:categoryName' element={<ShopDetails/>}></Route>
              </Route>
              {/* public routes */}
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/' element={<Home />}></Route>
              <Route path='/home' element={<Home />}></Route>
            </Routes>
          </div>
          { <Footer /> }
        </>
      </AuthProvider>
    </div>
  );
}

export default App;
