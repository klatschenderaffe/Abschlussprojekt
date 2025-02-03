import React from 'react';
import './Title.css';

const Title = ({ subtitle, title }) => {
  return (
    <div className="title">
      {/* designed to be reusable */}
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
