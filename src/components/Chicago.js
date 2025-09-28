import React from 'react';

function Chicago() {
  return (
    <section className="chicago-section">
      <div className="chicago-content">
        <h2>Little Lemon Chicago</h2>
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
        {/* Placeholder for restaurant image */}
        <div className="image-placeholder" aria-label="Restaurant interior"></div>
      </div>
    </section>
  );
}

export default Chicago;
