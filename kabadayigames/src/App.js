import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.png';
import tefo_icon from './assets/tefo_icon.png';
import GamePage from './GamePage';
import AiPage from './AiPage';
import kelimelik from './assets/kelimelik.png';
import ContactPage from './contact';
import PrivacyPolicy from './PirvacyPolice';
function Home() {
  return (
    <div className="App">
      <header style={{ flex: 1, alignItems: "center", flexDirection: "row-reverse" }}>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1>Resul Çalışkan</h1>
        <h1> </h1>
      </header>

      <nav>
         <Link to="/oyun">Oyun ve Mobil Uygulama</Link>
        <Link to="/ai">Yapay Zeka</Link>
        <Link to="/contact">İletişim</Link>
      </nav>

      <div className="hero">
        <h2>Merhaba ben Yazılım Geliştirici Resul Çalışkan</h2>
        <p>Bu da benim yolculuğumu anlatan web sitem. Mobil uygulama, oyun, yapay zeka ve ilgimi çeken her alan... Girişimcilik benim hayat felsefem: Aklıma bir fikir gelirse onu gerçeğe dönüştürmek benim tutkum.</p>
      </div>
<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
      <div className="games-wrapper">
        <div className="games">
          <div className="game-card">
            <h3>Tefo: Macera Başlıyor</h3>
            <img src={tefo_icon} alt="Tefo Oyunu" style={{ width: '50%', borderRadius: 20 }} />
            <p>Hayal gücünüzle savaşın, meyveleri alt edin!</p>
            <Link to="/oyun" className="link-text">Oyuna Git</Link>
          </div>
        </div>
      </div>
      <div className="games-wrapper">
        <div className="games">
          <div className="game-card">
            <h3>Kelimelik</h3>
            <img src={kelimelik} alt="Tefo Oyunu" style={{ width: '50%', borderRadius: 20 }} />
            <p>Hayal gücünüzle savaşın, meyveleri alt edin!</p>
            <Link to="/oyun" className="link-text">Uygulamaya Git</Link>
          </div>
        </div>
      </div>
      <div className="games-wrapper">
        <div className="games">
          <div className="game-card">
            <h3>T5 TTF Turkish</h3>
             <div style={{ width: '50%', borderRadius: 20 ,height:160}} /> 
            <p>T5 TFF tabanlı yapay zeka ses klonlama</p>
            <Link to="/ai" className="link-text">Yapay Zeka Projeleri</Link>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oyun" element={<GamePage />} />
        <Route path="/ai" element={<AiPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
