import React from 'react';
import './Impressum.css'; // Optional: CSS-Datei für das Styling

// Impressum
const Impressum = () => {
  return (
    <div className="impressum">
      <h1>Impressum</h1>
      <section>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Max Mustermann
          <br />
          Musterstraße 1<br />
          12345 Musterstadt
        </p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (0) 123 456789
          <br />
          E-Mail: info@musterfirma.de
        </p>
      </section>
      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
          DE123456789
        </p>
      </section>
      <section>
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Max Mustermann
          <br />
          Musterstraße 1<br />
          12345 Musterstadt
        </p>
      </section>
    </div>
  );
};

export default Impressum;
