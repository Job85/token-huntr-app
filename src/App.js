import React, { useEffect, useState } from 'react';
import { CheckSession } from './services/AuthServices';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Landing from './pages/LandingPage'
import Register from './pages/Register';
import Login from './pages/Login'
import Home from './pages/Home'
import LocationList from './pages/LocationList';
import LocationForm from './pages/AddLocation';
import EditCache from './pages/EditLocation';
import HillBackground from './components/Backgrounds/HillsBackground';


const App = () => {

  const [authenticated, toggleAuthenticated] = useState(false)

  // sets user state for authorized routes
  const [user, setUser] = useState(null)


  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token && user) {
      checkToken()
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <div>
        <HillBackground />
        <Routes>
          <Route path='/hills' element={<HillBackground />} />
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login
            // setId={userId}
            setUser={setUser}
            toggleAuthenticated={toggleAuthenticated} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/locations' element={<LocationList
            user={user}
            authenticated={authenticated}
          />} />
          <Route path='/locations/create/:user_id' element={<LocationForm
            user={user}
            authenticated={authenticated}
          />} />
          <Route path={`/locations/:location_id`} element={<EditCache
            user={user}
            authenticated={authenticated}
          />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;