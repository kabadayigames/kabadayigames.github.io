import React from "react";
import "./AiPage.css";

function AiPage() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div
      style={{ flex: 1, alignItems: "center", flexDirection: "row-reverse" }}
    >
      <header
        className="ai-header"
        style={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        <button
          onClick={handleGoBack}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ← Geri Dön
        </button>
        <h1>Yapay Zeka Projelerim</h1>
        <h1> </h1>
      </header>

      <div className="card-container">
        {/* Kart 1 */}
        <div className="card">
          <h2 className="card-title">T5-TTF Türkçe Ses Klonlama</h2>
          <p className="card-description">
            Bu proje T5-TTF ingilizce ses klonlama teknolojisinin türkçe
            eğitilmiş veriler ile türkçe ses klonlamayı amaçlamış ve
            başarmıştır.
            <br />
            <span style={{ color: "red",  }}>
              Bu ses klonlamanın kötüye kullanımından mesul değilimdir.
            </span>
            <br />
            Sadece kendimi geliştirmek için yaptığım bir projedir.
          </p>
          <a
            href="https://github.com/Resul-Caliskan/f5-ttf-turkish"
            className="card-link"
          >
            GitHub
          </a>
        </div>
        {/* Kart 2 */}
        <div className="card">
          <h2 className="card-title">Zeki App</h2>
          <p className="card-description">
           Yapay zeka tabanlı soru çözme uygulaması. OCR (optic charachter recognation) ile çekilen sorudan text i çıkartıp. OpenAi apisine göndermekteyim
           ChatGpt bana soru çözümü ile birlikte benzer 2 soru üretmektedir. Bunları adım adım öğrenci ile paylaşıp soru çözümünü anlatmak hemde öğrenmesini pekiştirmekteyim.
           
          </p>
          <a
            href="https://github.com/Resul-Caliskan/zekiApp"
            className="card-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default AiPage;
