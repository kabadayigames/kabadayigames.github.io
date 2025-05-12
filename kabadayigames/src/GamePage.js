import React from 'react';
import './App.css';
import tefo_icon from './assets/tefo_icon.png';
import kelimelik from './assets/kelimelik.png';

function GamePage() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="App">
      <header className="game-header">
        <button onClick={handleGoBack} style={{
          marginRight: 20,
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          ← Geri Dön
        </button>
        <h1>Oyunlar ve Mobil Uygulamalar</h1>
        <h1> </h1>
      </header>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
        <div className="games-wrapper">
          <div className="games">
            <div className="game-card">
              <h3>Tefo: Macera Başlıyor</h3>
              <img src={tefo_icon} alt="Tefo Oyunu" style={{ width: '50%', borderRadius: 20 }} />
              <p>Hayal gücünüzle savaşın, meyveleri alt edin!</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.kabadayigames.keloglan"
                target="_blank"
                rel="noopener noreferrer"
                className="link-text"
              >
                Play Store'da Aç
              </a>
            </div>
          </div>
        </div>

        <div className="games-wrapper">
          <div className="games">
            <div className="game-card">
              <h3>Kelimelik</h3>
              <img src={kelimelik} alt="Kelimelik Oyunu" style={{ width: '50%', borderRadius: 20 }} />
              <p>İngilizce Öğrenmenin Eğlenceli Ve Yapay Zekalı Yolu</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.kabadayigames.kelimelik"
                target="_blank"
                rel="noopener noreferrer"
                className="link-text"
              >
                Play Store'da Aç
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
