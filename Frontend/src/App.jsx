import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Fussleiste from './components/Fussleiste/Fussleiste';
import Title from './components/Title/Title';
import Laenderregeln from './components/Laenderregeln/Laenderregeln';
import Contact from './components/Contact/Contact';
import Def from './components/Def/Def';
import Map from './components/Map/Map';
import Impressum from './components/Impressum/Impressum';

// here is the structure of the website
// the various components are called one after the other here
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title
          subtitle='Suche deinen nächsten Stellplatz'
          title='Stellplatz Sucher'
        />
        <Map />

        <Contact />
        <Title
          subtitle='Du willst wissen wo es erlaubt ist zu stehen?'
          title='Länder und ihre Regeln'
        />
        <Def />
        <Laenderregeln />
      </div>
      <Fussleiste />
      <Impressum />
    </div>
  );
};

export default App;
