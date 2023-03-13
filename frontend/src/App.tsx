import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Product from './Products/Products';
import Home from './Home/Home';
import Orders from './Order/Orders';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <Router>
    <div className="grid-container">
        <link rel="stylesheet" href="style.css"/>
        
        <title>Black-Zinc-Spitz</title>

    <body>
    <div>
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">Black-Zinc-Spitz</a>
        </div>
        <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
        </div>
    </header>
    <title>Black-Zinc-Spitz</title>
    

        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="index.html">Pants</a>
                </li>
                
                <li>
                    <a href="index.html">Shirts</a>
                </li>
            </ul>
        </aside>
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Product />} />
                <Route path="orders" element={<Orders />}></Route>
                <Route path="/order/:id" element={<OrderDetail />}></Route>
            </Routes>
        </main>
        <footer className="footer">
            &copy; 2022 Black-Zinc-Spitz
        </footer>
    </div>
</body>
</div>
</Router>
  );
}

export default App;
//#endregion

