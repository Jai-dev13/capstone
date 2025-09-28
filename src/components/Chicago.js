import React from 'react';
import logo from '../assets/logo.png';

function Chicago() {
  return (
    <section className="chicago-section">
      <div className="chicago-content">
        <div className="chicago-header">
          <h2>Little Lemon Chicago</h2>
        </div>
        <p>
          Little Lemon opened in 1995 by two Italian brothers, bringing their grandmother's recipes
          from the Mediterranean to Chicago. The restaurant has been serving
          authentic Mediterranean cuisine ever since, using fresh, locally-sourced ingredients
          and traditional cooking methods.
        </p>
        <p>
          Our cozy atmosphere makes every guest feel like family, while our modern take on
          traditional recipes keeps them coming back for more.
        </p>
      </div>
      <div className="chicago-image">
        <img 
          src={logo} 
          alt="Little Lemon Logo" 
          className="chicago-feature-image"
        />
      </div>
    </section>
  );
}

export default Chicago;
