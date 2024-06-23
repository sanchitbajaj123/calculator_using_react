import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Calculator from './calculator';
import reportWebVitals from './reportWebVitals';
const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>WELCOME TO REACT CALCULATOR</p>
      <Link className="App-link" to="/calculator">
        CALCY
      </Link>
    </header>
    <div>
      {reportWebVitals(console.log)}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}
reportWebVitals();
export default App;
