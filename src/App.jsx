import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Preferences from './components/Preferences';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <header>
  <div className="header-container">
    <nav className="nav-links">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/product" className={({ isActive }) => (isActive ? 'active' : '')}>
        Product
      </NavLink>
      <NavLink to="/preferences" className={({ isActive }) => (isActive ? 'active' : '')}>
        Preferences
      </NavLink>
    </nav>

    <NavLink to="/login" className="login-link">
      Login
    </NavLink>
  </div>
</header>


      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
