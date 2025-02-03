import React from 'react';
import './Laenderregeln.css';
import Deutschland from '../../assets/Deutschland.png';
import Daenemark from '../../assets/Daenemark.jpeg';
import Tschechien from '../../assets/Tschechien.jpeg';
import Polen from '../../assets/Polen.jpeg';
import Österreich from '../../assets/Österreich.jpeg';
import Schweiz from '../../assets/Schweiz.png';
import Belgien from '../../assets/Belgien.png';
import Niederlande from '../../assets/Niederlande.jpeg';
import Luxembourg from '../../assets/Luxembourg.jpeg';

// Country flags with hover function
const Laenderregeln = () => {
  return (
    <div className="laender">
      <div className="land">
        <img src={Deutschland} />
        <div className="caption">
          <h3>Deutschland</h3>
          <p>
            Campen <br />
            an sich ist erlaubt, unter einigen regeln <br />
            <br />
            Wildcampen <br />
            ist in deutschland verboten, wird mit einer strafe ab 100 euro
            berechnet Campen auf offiziellen campingstellen <br />
            <br />
            Freistehen <br />
            Es ist erlaubt auf öffentlichen KFZ-Parkplätzen zu stehen um die
            Fahrtüchtigkeit wieder zu gewährleiten zu können.{' '}
          </p>
        </div>
      </div>
      <div className="land">
        <img src={Daenemark} />
        <div className="caption">
          <h3>Dänemark</h3>
          <p>
            Campen <br />
            Ist nur auf ausgewiesenen Campingplätzen erlaubt <br />
            <br />
            Wildcampen <br />
            Wildcampen ist nicht erlaubt. <br />
            In einigen Wäldern ist es nur für eine Nacht erlaubt <br />
            <br />
            Freistehen <br />
            Freistehen ist nur zur Fahrzeug wiederherstellung erlaubt{' '}
          </p>
        </div>
      </div>
      <div className="land">
        <img src={Tschechien} />
        <div className="caption">
          <h3>Tschechien</h3>
          <p>
            Campen <br />
            Ist nur auf ausgewiesenen Campingplätzen erlaubt <br />
            <br />
            Wildcampen <br />
            Wildcampen mit dem Wohnmobil ist offiziell nicht erlaubt. <br />
            Es gibt jedoch Ausnahmen unter freiem Himmel zu schlafen. <br />
            <br />
            Freistehen <br />
            In ländlichen Gebieten ist es erlaubt eine Nacht im Zelt <br />
            oder Camper zu verbringen.{' '}
          </p>
        </div>
      </div>
      <div className="land">
        <img src={Polen} />
        <div className="caption">
          <h3>Polen</h3>
          <p>
            Campen <br />
            Campen nur an ausgewiesenen Stellplätzen. <br />
            <br />
            Wildcampen <br />
            Wildcampen ist offiziell nicht erlaubt. Strafen können bis zu 120€
            ausfallen <br />
            <br />
            Freistehen <br />
            Freistehen ist grundsätzlich erlaubt solange die regeln eingehalten
            werden
          </p>
        </div>
      </div>
      <div className="land">
        <img src={Österreich} />
        <div className="caption">
          <h3>Österreich</h3>
          <p>
            Campen <br />
            Ist nur auf ausgewiesenen Campingplätzen erlaubt <br />
            <br />
            Wildcampen <br />
            Wildcampen mit dem Wohnmobil ist in Österreich generell <br />
            nicht erlaubt. <br />
            <br />
            Freistehen <br />
            Freistehen ist generell nicht erlaubt. Strafen werden mit bis zu
            500€ geahndet.
          </p>
        </div>
      </div>
      <div className="land">
        <img src={Schweiz} />
        <div className="caption">
          <h3>Schweiz</h3>
          <p>
            Campen <br />
            Ist nur auf ausgewiesenen Campingplätzen erlaubt <br />
            <br />
            Wildcampen <br />
            Die Grundlage zum Wildcampen bildet das <br />
            Jedermannsrecht bzw. jedermanns Zutrittsrecht. <br />
            <br />
            Freistehen <br />
            freistehen ist für 1-3 Nächte ausserhalb des Naturschutzgebietes
            erlaubt
          </p>
        </div>
      </div>
      <div className="land">
        <img src={Belgien} />
        <div className="caption">
          <h3>Belgien</h3>
          <p>
            Campen <br />
            Ist nur auf ausgewiesenen Campingplätzen erlaubt <br />
            <br />
            Wildcampen <br />
            Wildcampen ist nicht erlaubt. Es können Strafen bis zu 150€
            ausfallen. <br />
            allerdings gibt es "Pfahl Campingplätze" auf denen es erlaubt ist.
            <br />
            <br />
            Freistehen <br />
            freistehen ist nicht erlaubt, vor allem in Küstennähe.
          </p>
        </div>
      </div>
      <div className="land">
        <img src={Niederlande} />
        <div className="caption">
          <h3>Niederlande</h3>
          <p>
            Campen <br />
            Ist nur auf ausgewiesenen Campingplätzen erlaubt <br />
            <br />
            Wildcampen <br />
            Wildcampen ist mit dem Wohnmobil streng verboten.auch auf <br />
            Privatgrundstücken ist es nicht erlaubt.
            <br />
            <br />
            Freistehen <br />
            freistehen ist streng verboten und kann eine strafe <br />
            bis zu 500€ pro Person mit sich ziehen.
          </p>
        </div>
      </div>
      <div className="land">
        <img src={Luxembourg} />
        <div className="caption">
          <h3>Luxembourg</h3>
          <p>
            Campen <br />
            Ist nur auf ausgewiesenen Campingplätzen erlaubt <br />
            <br />
            Wildcampen <br />
            Abseits der Städte wird es für eine Nacht toleriert. Mit <br />
            Genehmigung des Besitzers auch auf deren Grundstück.
            <br />
            <br />
            Freistehen <br />
            Eine Nacht im Fahrzeug zur Wiederherstellung des Fahrzeugs ist
            gestattet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Laenderregeln;
