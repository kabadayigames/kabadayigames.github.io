import React from 'react';
import './ContactPage.css';
import ben from './assets/ben.jpg';
const ContactPage = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Resul Çalışkan</h1>
      </header>

      <nav className="contact-nav">
        <NavButton href="/" text="Ana Sayfa" />
        <NavButton href="/contact" text="İletişim" />
      </nav>

      <section className="contact-content">
        <h2>İletişime Geçin</h2>
        <img 
          src={ben}
          alt="Profil" 
          className="profile-image"
        />

        <div className="about-section">
          <p>
            Merhaba! Ben Kabadayı Games'in kurucusu ve girişimcilik tutkunuyum. 
            Aklıma bir fikir gelirse her zaman uygularım. Yapay zeka,  mobil uygulama ve oyun gibi yazılımın çeşitli alanlarına ilgi duyuyorum.
            Ama kariyerim açısından artık Yapay zekaya karar vermiş bulunuyorum. Yazılım alanı çok büyük ve hangi alandan ilerliyeceğimizi seçmek için
            bence en iyi yol denemek. 
            <p> Üniversiteden mezun olduktan sonra sevdiğim alana karar vermek için bu alanları denemem gerekti. Bu süreçte de Kabadayi Games'i kurup
            bu denediğim projelerden gelir elde etmeyi sağladım. Fakat artık profesyonel bir ekipte yer alma vakti geldi.</p>
           
          </p>

          <div className="message-box">
            <p>
              Eğer benimle iletişime geçmek, projelerim hakkında fikir alışverişinde bulunmak veya 
              sadece merhaba demek isterseniz, aşağıdaki bağlantılardan bana ulaşabilirsiniz. 
            </p>
          </div>
        </div>

        <div className="contact-links">
          <ContactLink href="mailto:resulcaliskansau@gmail.com" text="E-posta ile iletişime geçin" />
          <ContactLink href="https://www.youtube.com/@Kabadayi_Games" text="YouTube'da Beni Takip Edin" />
          <ContactLink href="https://www.twitch.tv/kabadayigames" text="Twitch'den Yayınlarımıza Katılın" />
          <ContactLink href="https://buymeacoffee.com/resulcalisk" text="Bana Bir Kahve Alarak Destek Olabilirsiniz" />
        </div>
      </section>

      <footer className="contact-footer">
        <p>Kabadayı Games 2025 &copy; Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

const NavButton = ({ href, text }) => (
  <a href={href} className="nav-button">{text}</a>
);

const ContactLink = ({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
    {text}
  </a>
);

export default ContactPage;
