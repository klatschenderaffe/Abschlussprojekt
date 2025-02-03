import React from 'react';
import './Def.css';

// Definitions of camping, wild camping and freestanding
const Def = () => {
  return (
    <div className="definitionen">
      <div className="definition">
        <h4>Was ist Camping?</h4>
        <p>
          Camping ist das vorübergehende Wohnen im Freien, meist in Zelten,
          Wohnwagen oder Wohnmobilen, oft in der Natur oder auf speziell dafür
          vorgesehenen Plätzen.{' '}
        </p>
      </div>
      <div className="definition">
        <h4>Was ist Freistehen?</h4>
        <p>
          Freistehen bedeutet, mit einem Wohnmobil oder Camper außerhalb
          offizieller Campingplätze zu übernachten, oft auf öffentlichen
          Parkplätzen oder in der Natur, ohne spezielle Infrastruktur{' '}
        </p>
      </div>
      <div className="definition">
        <h4>Was ist Wildcamping?</h4>
        <p>
          Wildcampen bedeutet das unerlaubte Aufstellen von Zelten oder
          Übernachten im Freien, abseits von offiziellen Campingplätzen, oft in
          der Natur oder auf nicht dafür vorgesehenen Flächen.{' '}
        </p>
      </div>
    </div>
  );
};

export default Def;
