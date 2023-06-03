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
              </Route>
              {/* public routes */}
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/' element={<Home />}></Route>
              <Route path='/home' element={<Home />}></Route>
            </Routes>
          </div>
          <Footer />
        </>
      </AuthProvider>
    </div>
  );
}

export default App;
