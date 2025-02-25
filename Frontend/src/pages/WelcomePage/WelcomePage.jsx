import Categorys from '../../components/Categorys/Categorys';
import Navbar from '../../components/Navbar/Navbar';
import Title from '../../components/Title/Title';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div>
      <div className='nav-page'>
        <Navbar />
      </div>
      <Title subtitle='Blog Kategorien' title='Herzlich Willkommen' />
      <p className='welcome-text'>
        Schön, dass du da bist! Hier bist du genau richtig, wenn du deinen Van
        ausbauen möchtest. Du befindest dich gerade in der Kategorien-Übersicht
        – perfekt, um den Überblick zu behalten!
        <br />
        Hier kannst du dir eine Oberkategorie aussuchen, z. B. Rostversiegelung,
        Boden verlegen oder viele andere spannende Themen rund um den
        Van-Ausbau. <br />
        Klick dich einfach rein und finde jede Menge hilfreiche Artikel und
        Tipps für dein Projekt. Viel Spaß beim Stöbern und Werkeln <br />
        dein Van-Abenteuer wartet schon auf dich!
        <br />
        🚐✨
      </p>
      <Categorys />
    </div>
  );
};

export default WelcomePage;
